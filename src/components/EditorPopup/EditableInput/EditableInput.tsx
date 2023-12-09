import { Box, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { mainColors } from "../../../ui/palette";
import {
  inputField,
  text,
  inputWrapper,
  componentWrapper,
  inputTitle,
  saveButton,
} from "./style";
import { getFiltredTags } from "../../../utils/getFiltredTags";
import { SaveIcon } from "../../icons/saveIcon";
import { EditIconButton } from "../../icons/EditIconButton";

type EditableInputProps = {
  title: string;
  value: string;
  setDescriptionValue: (value: string) => void;
  setTags: (value: string[]) => void;
  isExtenderEditor?: boolean;
};

export const EditableInput = ({
  title,
  value,
  setDescriptionValue,
  setTags,
  isExtenderEditor,
}: EditableInputProps) => {
  const [isInputActrive, setIsInputActive] = useState<boolean>(false);

  const hightlightText = (text: string) => {
    const separatedlinebreaks = text
      .split("")
      .map((el) => {
        if (el === "\n") return ` ${el} `;
        return el;
      })
      .join("");

    const wordsArray = separatedlinebreaks.split(" ");
    return wordsArray.map((el, index) => {
      return (
        <React.Fragment key={index}>
          {index > 0 && " "}
          {el === "\n" && <br />}
          {el[0] === "#" ? (
            <span style={{ color: mainColors.green }}>{el}</span>
          ) : (
            el
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <Box sx={componentWrapper}>
      <Typography sx={inputTitle}>{title}</Typography>
      {isInputActrive ? (
        <Box sx={inputWrapper}>
          <TextField
            autoFocus
            sx={inputField}
            value={value}
            multiline={isExtenderEditor}
            onBlur={(e) => setIsInputActive(false)}
            onChange={(e) => {
              setDescriptionValue(e.target.value);
              if (isExtenderEditor) setTags(getFiltredTags(e.target.value));
            }}
            onFocus={(e) =>
              e.target.setSelectionRange(value.length, value.length)
            }
          />
        </Box>
      ) : (
        <Typography onClick={(e) => setIsInputActive(true)} sx={text}>
          {isExtenderEditor ? hightlightText(value).map((el) => el) : value}
        </Typography>
      )}
      {isInputActrive ? (
        <IconButton sx={saveButton} onClick={(e) => setIsInputActive(false)}>
          <SaveIcon />
        </IconButton>
      ) : (
        <IconButton sx={saveButton} onClick={(e) => setIsInputActive(true)}>
          <EditIconButton />
        </IconButton>
      )}
    </Box>
  );
};
