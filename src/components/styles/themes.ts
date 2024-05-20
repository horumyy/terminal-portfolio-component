import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  dark: {
    id: "T_001",
    name: "dark",
    colors: {
      body: "#101116",
      scrollHandle: "#424242",
      scrollHandleHover: "#616161",
      primary: "#A738A6",
      secondary: "#33ABAC",
      text: {
        100: "#ffffff",
        200: "#c7c7c7",
        300: "#A763A6",
      },
    },
  },
  light: {
    id: "T_002",
    name: "light",
    colors: {
      body: "#101116",
      scrollHandle: "#424242",
      scrollHandleHover: "#616161",
      primary: "#A738A6",
      secondary: "#33ABAC",
      text: {
        100: "#ffffff",
        200: "#c7c7c7",
        300: "#A763A6",
      },
    },
  },
  "blue-matrix": {
    id: "T_003",
    name: "blue-matrix",
    colors: {
      body: "#101116",
      scrollHandle: "#424242",
      scrollHandleHover: "#616161",
      primary: "#A738A6",
      secondary: "#33ABAC",
      text: {
        100: "#ffffff",
        200: "#c7c7c7",
        300: "#A763A6",
      },
    },
  },
  espresso: {
    id: "T_004",
    name: "espresso",
    colors: {
      body: "#101116",
      scrollHandle: "#424242",
      scrollHandleHover: "#616161",
      primary: "#A738A6",
      secondary: "#33ABAC",
      text: {
        100: "#ffffff",
        200: "#c7c7c7",
        300: "#A763A6",
      },
    },
  },
  "green-goblin": {
    id: "T_005",
    name: "green-goblin",
    colors: {
      body: "#101116",
      scrollHandle: "#424242",
      scrollHandleHover: "#616161",
      primary: "#A738A6",
      secondary: "#33ABAC",
      text: {
        100: "#ffffff",
        200: "#c7c7c7",
        300: "#A763A6",
      },
    },
  },
  ubuntu: {
    id: "T_006",
    name: "ubuntu",
    colors: {
      body: "#101116",
      scrollHandle: "#424242",
      scrollHandleHover: "#616161",
      primary: "#A738A6",
      secondary: "#33ABAC",
      text: {
        100: "#ffffff",
        200: "#c7c7c7",
        300: "#A763A6",
      },
    },
  },
};

export default theme;
