import { Box, Button, Typography } from "@mui/material";
import {
  ADD_BUTTON,
  MAIN_TITLE,
  POPUP_BUTTON_TITLE,
  POPUP_TITLE_CREATE,
} from "./constants";
import { SearchBar } from "./SearchBar/SearchBar";
import { addButton, header, title, titleWrapper } from "./style";
import { FilterButtonsGroup } from "./FilterButtonsGroup/FilterButtonsGroup";
import { useState } from "react";
import { createPortal } from "react-dom";
import { EditorPopup } from "../EditorPopup/EditorPopup";
import { useAppDispatch, useTodos } from "../../store/hooks";
import { addTodo } from "../../store/slices/todos";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>("");
  const [descriptionValue, setDescriptionValue] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const { id, todos } = useTodos();

  const tagsList = new Set(todos.map((el) => el.tags).flat(1));
  const tagsArray = Array.from(tagsList);

  const dispatch = useAppDispatch();

  const addNote = () => {
    dispatch(
      addTodo({
        id: id,
        title: titleValue,
        content: descriptionValue,
        tags: tags,
        isCompleted: false,
      })
    );
    setDescriptionValue("");
    setTitleValue("");
    setTags([]);
  };

  const toggleModal = () => {
    setIsModalOpen((value) => !value);
  };

  return (
    <Box sx={header}>
      <Box sx={titleWrapper}>
        <Typography sx={title}>{MAIN_TITLE}</Typography>
        <Button sx={addButton} onClick={toggleModal}>
          {ADD_BUTTON}
        </Button>
      </Box>
      <SearchBar />
      <FilterButtonsGroup tags={tagsArray} isFilter={true} />
      {isModalOpen &&
        createPortal(
          <EditorPopup
            title={POPUP_TITLE_CREATE}
            closeHandler={setIsModalOpen}
            titleValue={titleValue}
            setTitleValue={setTitleValue}
            descriptionValue={descriptionValue}
            setDescriptionValue={setDescriptionValue}
            onClickHandler={addNote}
            tags={tags}
            setTags={setTags}
            buttonTitle={POPUP_BUTTON_TITLE}
          />,
          document.body
        )}
    </Box>
  );
};
