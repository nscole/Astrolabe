import React, {useEffect, useState} from 'react';
import AddUser from './AddUser'
import User from "./User"

function CommentForm() { 

  const [users, setUsers] = useState([]);

  useEffect((users) => {
    fetchData(users);

  }, [users]);

  const fetchData = async (users) => {
    await fetch("http://localhost:4000/comments", users)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  };

 
  const onAdd = async (name, email, comment) => {
    await fetch("http://localhost:4000/comments", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        comment: comment,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((error) => console.log(error));
  };

  const onEdit = async (id, name, email, comment) => {
    await fetch(`http://localhost:4000/comments/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        email: email,
        comment: comment
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((users) => {
        // setUsers((users) => [...users, data]);
        const updatedUsers = users.map((user) => {
          if (user.id === id) {
            user.name = name;
            user.email = email;
            user.comment = comment;
          }

          return user;
        });

        setUsers(updatedUsers);
      })
      .catch((error) => console.log(error));
  };

  
  const onDelete = async (id) => {
    await fetch(`http://localhost:4000/comments/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Form">
      <div className='add-user'>
        <AddUser onAdd={onAdd} />
      </div>
      <div className='posted-comments'>
      {users.map((user) => (
        <User
          id={user.id}
          key={user.id}
          name={user.name}
          email={user.email}
          comment={user.comment}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
      </div>
    </div>
  );
}


export default CommentForm;