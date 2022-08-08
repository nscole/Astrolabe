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
    <form className="form-style" onSubmit={handleOnSubmit}>
      <h3>Comment</h3>
      <input placeholder="Name" name="name" />
      <input placeholder="Email" name="email" />
      <textarea placeholder="Comment" name="comment" />
      <button onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};

export default AddUser;