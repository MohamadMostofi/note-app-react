import React, { useState } from "react";

function AddNewNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !desc) return null;

    const newNote = {
      title,
      desc,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTitle("");
    setDesc("");
    onAddNote(newNote);
  }

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note title ..."
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note description ..."
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
