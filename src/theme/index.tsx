// @flow
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    borderColor: "#f7f7f7",
    headerBgColor: "#333333",
    headerFgColor: "#FFFFFF",
    activateColor: "#363636",
    deactivateColor: "#818181",
    titleColor: "#313131",
    colorFilterBorder: "#000000",
  },
  fontSizes: {
    small: "1.5rem",
    medium: "2rem",
    large: "3rem",
  },
  header: {
    height: "80px",
  },
};

export type ThemePropTypes = {
  children?: React.ReactNode;
};

const Theme = ({ children }: ThemePropTypes) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
