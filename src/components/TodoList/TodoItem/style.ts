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

export const todoTitle = {
  color: mainColors.white,
};

export const todoContent = {
  color: mainColors.white,
  height: "0px",
  overflow: "hidden",
  padding: "0 40px",
  transition: "300ms",
};

export const todoContentActive = {
  color: mainColors.white,
  padding: "10px 40px",
  height: "fit-content",
  overflow: "hidden",
  transition: "300ms",
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
