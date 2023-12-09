import { mainColors } from "../../../ui/palette";

export const todoItem = {
  background: mainColors.darkBlue,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px 30px",
};

export const todoItemWrapper = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
};

export const todoCheckbox = {
  width: "50px",
  height: "50px",
};

export const todoTitle = (isCompleted = false) => {
  const styles = {
    color: mainColors.white,
    minWidth: "10%",
    textDecoration: "none",
  };

  if (isCompleted) {
    styles.textDecoration = "line-through";
    styles.color = mainColors.darkGrey;
  }

  return styles;
};

export const todoContent = (isCompleted = false) => {
  const styles = {
    color: mainColors.white,
    padding: "10px 40px",
    height: "fit-content",
    overflow: "hidden",
    transition: "300ms",
    width: "100%",
    textDecoration: "none",
  };

  if (isCompleted) {
    styles.textDecoration = "line-through";
    styles.color = mainColors.darkGrey;
  }

  return styles;
};

export const todoWrapper = {};

export const todoEdit = {
  width: "40px",
  height: "40px",
};

export const todoDelete = {
  width: "40px",
  height: "40px",
};

export const todoToggle = {
  transition: "300ms",
  width: "40px",
  height: "40px",
};

export const todoToggleActive = {
  transform: "rotate(180deg)",
  transition: "300ms",
  width: "40px",
  height: "40px",
};
