import { positions } from "@mui/system";
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

export const todoWrapper = {
  position: "relative",
};

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

export const tooltipMessage = (isTooltipVisible = false) => {
  const style = {
    color: mainColors.white,
    position: "absolute",
    right: 0,
    padding: "10px 10px",
    opacity: 0,
    transition: "300ms",
    minWidth: "150px",
    background: mainColors.backgroundBlue,
    border: `solid 2px ${mainColors.green}`,
    borderRadius: "10px",
  };

  if (isTooltipVisible) {
    style.opacity = 1;
  }

  return style;
};