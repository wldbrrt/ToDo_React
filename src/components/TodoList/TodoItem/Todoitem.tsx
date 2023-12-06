import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import {
  todoCheckbox,
  todoDelete,
  todoEdit,
  todoItem,
  todoTitle,
  todoToggle,
  todoWrapper,
  todoContent,
  todoItemWrapper,
  todoContentActive,
  todoToggleActive,
} from "./style";
import { Checkboxicon } from "../../icons/checkbox";
import { CheckboxActiveicon } from "../../icons/checkboxActive";
import { EditIconButton } from "../../icons/EditIconButton";
import { DeleteIconButton } from "../../icons/DeleteIconButton";
import { ToggleNoteIconButton } from "../../icons/toggleNoteIconButton";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FilterButtonsGroup } from "../../Header/FilterButtonsGroup/FilterButtonsGroup";
import { EditorPopup } from "../../EditorPopup/EditorPopup";
import { useAppDispatch } from "../../../store/hooks";
import { removeTodo, setTodoContent } from "../../../store/slices/todos";
import { EDIT_POPUP_BUTTON_TITLE, EDIT_POPUP_TITLE } from "./constants";

type TTodoitem = {
  title: string;
  content: string;
  isCompleted: boolean;
  id: number;
  tags: string[];
};

export const Todoitem = ({
  title,
  content,
  isCompleted,
  id,
  tags,
}: TTodoitem) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [titleValue, setTitleValue] = useState<string>(title);
  const [descriptionValue, setDescriptionValue] = useState<string>(content);
  const [tagsArr, setTagsArr] = useState<string[]>(tags);

  const toggleModal = () => {
    setIsModalOpen((value) => !value);
  };

  const toggleDescriptionVisibility = () => {
    setIsVisible((value) => !value);
  };

  const dispatch = useAppDispatch();

  const editNote = () => {
    dispatch(
      setTodoContent({
        id: id,
        title: titleValue,
        content: descriptionValue,
        tags: tagsArr,
      })
    );
  };

  const deleteNote = () => {
    dispatch(removeTodo(id));
  };

  return (
    <Box sx={todoItem}>
      <Box sx={todoItemWrapper}>
        <Checkbox
          sx={todoCheckbox}
          checked={isCompleted}
          icon={<Checkboxicon />}
          checkedIcon={<CheckboxActiveicon />}
        />
        <Typography sx={todoTitle}>{title}</Typography>
        <Box sx={todoWrapper}>
          <IconButton sx={todoEdit} onClick={toggleModal}>
            <EditIconButton />
          </IconButton>
          <IconButton sx={todoDelete} onClick={deleteNote}>
            <DeleteIconButton />
          </IconButton>
        </Box>
      </Box>
      <Typography sx={isVisible ? todoContentActive : todoContent}>
        {content}
      </Typography>
      <FilterButtonsGroup tags={tags} />
      <IconButton
        sx={isVisible ? todoToggleActive : todoToggle}
        onClick={toggleDescriptionVisibility}
      >
        <ToggleNoteIconButton />
      </IconButton>
      {isModalOpen &&
        createPortal(
          <EditorPopup
            title={EDIT_POPUP_TITLE}
            closeHandler={setIsModalOpen}
            titleValue={titleValue}
            setTitleValue={setTitleValue}
            descriptionValue={descriptionValue}
            setDescriptionValue={setDescriptionValue}
            onClickHandler={editNote}
            tags={tagsArr}
            setTags={setTagsArr}
            buttonTitle={EDIT_POPUP_BUTTON_TITLE}
          />,
          document.body
        )}
    </Box>
  );
};
