import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: 40,
});

export const header = style({
  height: 100,
  width: "100%",
  display: "flex",
  alignItems: "center",
  fontSize: 24,
  backgroundColor: "white",
});

export const footer = style({
  height: 100,
  width: "100%",
  display: "flex",
  alignItems: "center",
  fontSize: 24,
  backgroundColor: "white",
});
