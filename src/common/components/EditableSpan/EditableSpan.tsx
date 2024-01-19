import { ChangeEvent, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { dividerClasses } from "@mui/material";

type EditableSpanType = {
  callback: (newTitle: string) => void;
  oldValue: string;
  titleButton: string;
};

export const EditableSpan = ({ callback, oldValue, titleButton }: EditableSpanType) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(oldValue);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };

  const onBlurHandler = () => {
    setEditMode(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      callback(newTitle);
      setEditMode(false);
    }
  };
  const editModeClickHandler = () => {
    setEditMode(true);
  };

  return editMode ? (
    <TextField
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      onKeyDown={handleKeyDown}
      autoFocus={true}
      id="outlined-multiline-flexible"
      label="Multiline"
      multiline
      maxRows={4}
      defaultValue={oldValue}
    />
  ) : (
    <>
      <h3>{oldValue}</h3>
      <Button onClick={editModeClickHandler}>{titleButton}</Button>
    </>
  );
};
