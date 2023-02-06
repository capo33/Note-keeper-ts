import DeleteIcon from "@mui/icons-material/Delete";

import { Fab } from "@mui/material";

type NoteProps = {
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
};

const Notes = ({ id, content, title, onDelete }: NoteProps) => {
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      <Fab onClick={handleClick}>
        <DeleteIcon />
      </Fab>
    </div>
  );
};

export default Notes;
