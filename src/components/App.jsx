import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
    return (
        <div>
            <Header/>
            {/* <Note /> */}
            {notes.map(keepNotes => (
                <Note
                    key={keepNotes.key}
                    title={keepNotes.title}
                    content={keepNotes.content}
                />
    ))}
            <Footer/>
        </div>
        );
}

export default App;