import { Box, Button, Typography } from "@mui/material";
import {
  editorWrapper,
  editorBackground,
  editorTitle,
  editorAddButton,
  closeButton,
} from "./style";
import { POPUP_NOTE_DESCRIPTION, POPUP_NOTE_TITLE } from "./constants";
import { FilterButtonsGroup } from "../Header/FilterButtonsGroup/FilterButtonsGroup";
import { useEffect, useState } from "react";
import { useDebounce } from "../../store/hooks";
import React from "react";
import { EditableInput } from "./EditableInput/EditableInput";
import { getFiltredTags } from "../../utils/getFiltredTags";
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

  useEffect(() => {
    setEditorTags(getFiltredTags(descriptionValue));
  }, [debouncedValue]);

  return (
    <>
      <Box sx={editorBackground}></Box>
      <Box sx={editorWrapper}>
        <Typography sx={editorTitle}>{title}</Typography>
        <Button sx={closeButton} onClick={(e) => closeHandler(false)}>
          X
        </Button>

        <EditableInput
          title={POPUP_NOTE_TITLE}
          value={titleValue}
          setTags={setTags}
          setDescriptionValue={setTitleValue}
        />

        <EditableInput
          title={POPUP_NOTE_DESCRIPTION}
          value={descriptionValue}
          setTags={setTags}
          setDescriptionValue={setDescriptionValue}
          isExtenderEditor={true}
        />
        <FilterButtonsGroup tags={editorTags} />
        <Button
          sx={editorAddButton}
          onClick={() => {
            setTags(getFiltredTags(descriptionValue));
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
