import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isContent, setIsContent] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function textClick() {
    console.log("Text area clicked");
    setIsContent(true);
    console.log(isContent);
  }

  return (
    <div>
      <form className="create-note">
        {isContent && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={textClick}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isContent ? 3 : 1}
        />
        <Zoom in={isContent && true}>
          <button onClick={submitNote}>
            <AddIcon />
          </button>
          {/* <Button onClick={submitNote} variant="contained">
            <AddIcon />
          </Button> */}
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
