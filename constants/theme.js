import { Dimensions } from "react-native";

const { height, width } = Dimensions;

export const COLORS = {
    primary: "#fc5c65",
    secondary: "#4ecdc4",
    white: "#fff",
    dark: "#000",
    lightGrey: "#f8f4f4",
    lightGrey2: "#6e6969",
    danger: "#ff5252",
}

export const SIZES = {
    base: 24,

    width,
    height
}

const appTheme = {
    COLORS
}

export default appTheme;