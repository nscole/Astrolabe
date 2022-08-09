import React from "react";


function AddUser ({ onAdd }) {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value, evt.target.comment.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
    evt.target.comment.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="form-style">
        <h3>Comment</h3>
        <div className="form-fields">
          <input className="form-name" placeholder="Name" name="name" />
          <input className="form-email"placeholder="Email" name="email" />
          <textarea className="form-comment" placeholder="Comment" name="comment" />
          <button className="form-btn" onSubmit={handleOnSubmit}><i className="fa-solid fa-comment"></i>Comment</button>
        </div>
      </div>
      <hr />
    </form>
  );
};

export default AddUser;