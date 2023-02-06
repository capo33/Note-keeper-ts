export type NotesType = {
  title: string;
  content: string;
} 

export type AreaProps = {
  onAdd: ({ title, content }: NotesType) => void;
};