import { Box, Button, TextField, Typography } from "@mui/material";
import {
  editorWrapper,
  editorBackground,
  editorTitle,
  todoTitle,
  todoDescription,
  editorAddButton,
  descriptionText,
} from "./style";
import { POPUP_NOTE_DESCRIPTION, POPUP_NOTE_TITLE } from "./constants";
import { FilterButtonsGroup } from "../Header/FilterButtonsGroup/FilterButtonsGroup";
import { useEffect, useState } from "react";
import { useDebounce } from "../../store/hooks";
import React from "react";
import { mainColors } from "../../ui/palette";
type EditorPopupProps = {
  closeHandler: (value: boolean) => void;
  title: string;
  titleValue: string;
  setTitleValue: React.Dispatch<React.SetStateAction<string>>;
  descriptionValue: string;
  setDescriptionValue: React.Dispatch<React.SetStateAction<string>>;
  onClickHandler: () => void;
  tags: string[];
  setTags: (value: string[]) => void;
  buttonTitle: string;
};

export const EditorPopup = ({
  closeHandler,
  title,
  titleValue,
  setTitleValue,
  descriptionValue,
  setDescriptionValue,
  onClickHandler,
  tags,
  setTags,
  buttonTitle,
}: EditorPopupProps) => {
  const debouncedValue = useDebounce(descriptionValue, 600);
  const [editorTags, setEditorTags] = useState<string[]>(tags);

  const findTags = (string: string) => {
    const wordsArray = string.split(" ");
    const tagsArr = wordsArray.filter((el) => el[0] === "#");
    return Array.from(new Set(tagsArr));
  };

  useEffect(() => {
    setEditorTags(findTags(descriptionValue));
  }, [debouncedValue]);

  const hightlightText = (text: string) => {
    const wordsArray = text.split(" ");
    return wordsArray.map((el, index) => (
      <React.Fragment key={index}>
        {index > 0 && " "}
        {el[0] === "#" ? (
          <span style={{ color: mainColors.green }}>{el}</span>
        ) : (
          el
        )}
      </React.Fragment>
    ));
  };

  return (
    <>
      <Box sx={editorBackground}></Box>
      <Box sx={editorWrapper}>
        <Typography sx={editorTitle}>{title}</Typography>
        <TextField
          sx={todoTitle}
          /* placeholder={POPUP_NOTE_TITLE} */
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <TextField
          sx={todoDescription}
          placeholder={POPUP_NOTE_DESCRIPTION}
          value={descriptionValue}
          onChange={(e) => {
            setDescriptionValue(e.target.value);
            setTags(findTags(e.target.value));
          }}
        />
        <Typography sx={descriptionText}>
          {hightlightText(descriptionValue).map((el) => el)}
        </Typography>
        <FilterButtonsGroup tags={editorTags} />
        <Button
          sx={editorAddButton}
          onClick={() => {
            setTags(findTags(descriptionValue));
            onClickHandler();
            closeHandler(false);
          }}
        >
          {buttonTitle}
        </Button>
      </Box>
    </>
  );
};
