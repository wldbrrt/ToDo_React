import { mainColors } from "../../../ui/palette";

export const buttonGroup = {
  display: "flex",
  gap: "5px",
  width: "80%",
};

export const button = {
  background: "none",
  border: `${mainColors.green} solid 2px`,
  borderRadius: "15px",
  color: mainColors.white,
  fontSize: "10px",
  padding: "0 0 0 0 ",
  "&:active": {
    background: mainColors.green,
  },
};

export const activeButton = {
  background: mainColors.green,
  border: `${mainColors.green} solid 2px`,
  borderRadius: "15px",
  color: mainColors.white,
  fontSize: "10px",
  padding: "0 0 0 0 ",
  "&:active": {
    background: mainColors.green,
  },
};
