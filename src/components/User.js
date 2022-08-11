import React, { useState } from "react";
import UserIcon from "../assets/astronaut-icon.png";


function User ({ name, email, comment, id, onEdit, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value,  evt.target.comment.value
    );
    setIsEdit(!isEdit);
  };

  return (
    <div className="comment-section-user">
      {isEdit ? (
        <form  onSubmit={handleOnEditSubmit}>
          <label className="label-name" for="name">Name</label>
          <input className="edit-name" placeholder="Name" name="name" defaultValue={name} />
          <br/>
          <label className="label-email" for="email">Email</label>
          <input className="edit-email" placeholder="Email" name="email" defaultValue={email} />
          <br/>
          <label className="label-comment" for="comment">Comment</label>
          <textarea className="edit-comment" placeholder="Comment" name="comment" defaultValue={comment} />
          <br/>
          <div className="save-center">
          <button className="user-save-btn" onSubmit={handleOnEditSubmit}><i className="fa-solid fa-circle-check"></i>Save</button>
          </div>
        </form>
      ) : (
        <div className="user">
          <div className="user-indi-comment">
            <img className="user-icon" src={UserIcon} alt="user icon"/>
            <span className="user-name">{name}</span>
            <br/>
            <p></p>
            {/* <span className="user-email">{email}</span>
            <br/> */}
            <div className="comment">
              <label className="comment-header" for="comment">Comment</label><br/>
              <span className="user-comment">{comment}</span>
              <div>
              <button className="user-edit-btn" onClick={handleEdit}><i class="fa-solid fa-pen-to-square"></i>Edit</button>
              <button className="user-delete-btn" onClick={handleDelete}><i className="fa-solid fa-trash-can"></i>Delete</button>
            </div>
            </div>
            <br/>

          </div>
        </div>
      )}
    </div>
  ); 
};

export default User;