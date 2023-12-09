import { mainColors } from "../../ui/palette";

export const editorBackground = {
  position: "absolute",
  top: 0,
  zIndex: 4,
  width: "100%",
  height: "100%",
  background: "black",
  opacity: 0.7,
};

export const editorWrapper = {
  width: " 50%",
  minHeight: "80%",
  background: mainColors.backgroundBlue,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  margin: "0 auto",
  zIndex: 5,
  border: `${mainColors.green} solid 3px`,
  borderRadius: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
  paddingBottom: "30px",
};

export const editorTitle = {
  color: mainColors.white,
  fontSize: "35px",
  textAlign: "center",
  textTransform: "uppercase",
};

export const todoTitle = {
  width: "80%",
  border: "none",
  "& .MuiOutlinedInput-input": {
    color: mainColors.white,

    borderBottom: `${mainColors.green} solid 2px`,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:before": {
    content: "'Title'",
    color: mainColors.grey,
  },
};

export const todoDescription = {
  // opacity: 0,
  position: "relative",
  width: "80%",
  border: "none",
  zIndex: 5,
  "& .MuiOutlinedInput-input": {
    opacity: 0,
    color: mainColors.white,
    mixBlendMode: "multiply",

    borderBottom: `${mainColors.green} solid 2px`,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:before": {
    content: "'Description'",
    color: mainColors.grey,
  },
};

export const descriptionText = {
  width: "80%",
  color: mainColors.white,
  padding: "16px 14px",
  paddingBottom: "42px",
  position: "relative",
  zIndex: 4,
  borderBottom: `${mainColors.green} solid 2px`,
  marginTop: "-100px",
  height: "23px",
};

export const editorAddButton = {
  borderRadius: "20px",
  minWidth: "85px",
  fontSize: "40px",
  padding: "5 5",
  position: "relative",
  marginTop: "auto",
  background: mainColors.green,
  color: mainColors.white,
  "&:hover": {
    background: mainColors.green,
  },
};
