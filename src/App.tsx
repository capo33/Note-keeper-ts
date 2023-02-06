import React, { useEffect, useState } from "react";

import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Notes from "./components/Notes";
import { NotesType } from "./types/types";
import { substring } from "./utils/func";
import "./App.css";

function App() {
  const [notes, setNotes] = useState<NotesType[]>([]);

  const addNote = (newNote: NotesType) => {
    newNote.title = substring(newNote.title, 20);
    newNote.content = substring(newNote.content, 100);

    setNotes((previousNote) => {
      localStorage.setItem("notes", JSON.stringify([...previousNote, newNote]));

      return [...previousNote, newNote];
    });
  };

  const deleteNote = (id: number) => {
    setNotes((previousNote) => {
      localStorage.removeItem("notes");
      return previousNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };
  useEffect(() => {
    const notes = localStorage.getItem("notes");
    if (notes) {
      setNotes(JSON.parse(notes));
    }
  }, []);

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(({ title, content }, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={title}
            content={content}
            onDelete={deleteNote}
          />
        );
      })}
    </>
  );
}

export default App;
