import { mainColors } from "../../../ui/palette";

export const componentWrapper = {
  width: "100%",
  minHeight: "100px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
};

export const inputTitle = {
  color: mainColors.grey,
  width: "80%",
  paddingBottom: "10px",
};

export const inputWrapper = {
  width: "80%",
  padding: "0 0",
  position: "relative",
};

export const inputField = {
  // opacity: 0,
  position: "relative",
  width: "100%",
  minHeight: "60px",
  border: "none",
  zIndex: 5,
  bottom: 0,
  maxHeight: "150px",
  overflowY: "auto",
  padding: "0px 0px",
  "& .MuiInputBase-root": {
    padding: "0 0",
  },

  "& .MuiOutlinedInput-input": {
    opacity: 1,
    width: "100%",
    padding: "18px 14px",
    color: mainColors.white,
    background: mainColors.darkBlue,

    mixBlendMode: "multiply",
    borderBottom: `${mainColors.green} solid 2px`,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "::-webkit-scrollbar": {
    width: "30px",
  },

  "::-webkit-scrollbar-track": {
    background: mainColors.backgroundBlue,
  },

  "::-webkit-scrollbar-thumb": {
    background: mainColors.green,
    borderRadius: "20px",
    border: `solid ${mainColors.backgroundBlue} 10px`,
  },

  "::-webkit-scrollbar-thumb:hover": {
    background: mainColors.green,
  },
};

export const text = {
  opacity: 1,
  display: "block",
  height: "fit-content",
  minHeight: "60px",
  width: "80%",
  position: "relative",
  bottom: 0,
  color: mainColors.white,
  padding: "16px 14px",
  zIndex: 4,
  borderBottom: `${mainColors.green} solid 2px`,
  wordWrap: "break-word",
  maxHeight: "150px",
  overflowY: "auto",
  cursor: "text",

  "::-webkit-scrollbar": {
    width: "30px",
  },

  "::-webkit-scrollbar-track": {
    background: mainColors.backgroundBlue,
  },

  "::-webkit-scrollbar-thumb": {
    background: mainColors.green,
    borderRadius: "20px",
    border: `solid ${mainColors.backgroundBlue} 10px`,
  },

  "::-webkit-scrollbar-thumb:hover": {
    background: mainColors.green,
  },
};

export const saveButton = {
  width: "40px",
  height: "40px",
  position: "absolute",
  right: "10px",
  top: "60%",
};
