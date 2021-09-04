import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  // const [itemList, setItemList] = useState([]);

  function addItems(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
    // console.log(note);
  }

  function handleClick(event) {
    event.preventDefault();
    props.onAdd(note);
    // setNote((prevItem) => {
    //   return [...prevItem, note];
    //   // console.log(itemsList);
    // });
    // console.log(notes);
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          onChange={addItems}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={addItems}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          // onClick={() => {
          //   handleClick(props.id);
          // }}
          onClick={handleClick}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
