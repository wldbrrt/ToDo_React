import { mainColors } from "../../ui/palette";

export const header = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  paddingTop: "40px",
};

export const titleWrapper = {
  display: "flex",
  justifyContent: "space-between",
  width: "80%",
};

export const title = {
  color: "#fff",
  fontSize: "64px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  textTransform: "uppercase",
};

export const addButton = {
  background: mainColors.green,
  fontSize: "30px",
  borderRadius: "20px",
  color: mainColors.white,
  "&:hover": {
    background: mainColors.green,
    color: mainColors.darkBlue,
  },
};
