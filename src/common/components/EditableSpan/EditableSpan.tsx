import { ChangeEvent, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

type EditableSpanType = {
  title: string;
  onChange: (newTitle: string) => void;
  oldStatus: string;
};

export const EditableSpan = ({ title, onChange, oldStatus }: EditableSpanType) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length <= 300) setNewTitle(e.currentTarget.value);
  };

  const onBlurHandler = () => {
    onChange(newTitle);
    setEditMode(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onBlurHandler();
    }
  };

  return editMode ? (
    <TextField
      defaultValue={oldStatus}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      onKeyDown={handleKeyDown}
      autoFocus={true}
      value={newTitle}
      id="outlined-multiline-flexible"
      label="Multiline"
      multiline
      maxRows={4}
    />
  ) : (
    <Button onClick={() => setEditMode(true)}>{title ? title : "Click to add your status"}</Button>
  );
};
