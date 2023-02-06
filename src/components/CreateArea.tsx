import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Zoom } from "@mui/material";
import { Fab } from "@mui/material";

import { NotesType, AreaProps } from "../types/types";

const CreateArea = ({ onAdd }: AreaProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [note, setNote] = useState<NotesType>({
    title: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNote((previousValue: NotesType) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expand = () => {
    setIsExpanded(true);
  };

  return (
    <>
      <form className='create-note' onSubmit={handleSubmit}>
        {isExpanded ? (
          <input
            onChange={handleChange}
            name='title'
            placeholder='Title'
            value={note.title}
            autoComplete='off'
          />
        ) : null}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name='content'
          placeholder='Take a note...'
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />

        <Zoom in={isExpanded}>
          <Fab type='submit'>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </>
  );
};

export default CreateArea;
