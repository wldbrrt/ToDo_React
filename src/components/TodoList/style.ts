import { mainColors } from "../../ui/palette";

export const todoList = {
  width: "80%",
  height: "75vh",
  margin: "0 auto",
  paddingTop: "50px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  overflowY: "scroll",

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

export const noResulttitle = {
  textAlign: "center",
  color: mainColors.white,
  fontSize: "40px",
};
