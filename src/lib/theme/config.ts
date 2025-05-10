import { Platform, type TextStyle } from "react-native";

const fontFamily = {
  primary: {
    light: "geistLight",
    regular: "geistRegular",
    medium: "geistMedium",
    semiBold: "geistSemiBold",
    bold: "geistBold",
  },
  code: {
    normal: Platform.select({ ios: "Courier", android: "monospace" }),
  },
};

const colors = {
  accent: "#2344E3",
  accentForeground: "#FFFFFF",
  accentText: "#4761EA",
  lightAccentBorder: "#DEE3FB",
  lightAccentBackground: "#E9ECFC",

  background: "#FFFFFF",
  textBackground: "#FAFAFA",

  foreground: "#121212",
  secondaryForeground: "#4A4A4A",
  tertiaryForeground: "#888888",

  border: "#EBEBEB",
  placeholder: "#ABABAB",

  acceptedStatus: "#B4FF85",

  greenText: "#206527",
  greenBorder: "#B2DBB6",
  greenBackground: "#E5F5E6",

  red: "#FF0000",
  redText: "#CD1313",
  redBorder: "#F9D3D3",
  redBackground: "#FFE5E5",

  orangeText: "#994500",
  orangeBorder: "#FFCFA6",
  orangeBackground: "#FFF1E5",

  skeleton: "#EBEBEB",

  tabBarBackground: "#FFFFFF",
  tabBarForeground: "#56616A",

  purple: "#493745",
  purpleForeground: "#E5DAE3",
};

const defaultTheme = {
  colors,
  fontFamily,
  fontPresents: {
    title: {
      fontSize: 20,
      fontFamily: fontFamily.primary.semiBold,
      lineHeight: 28,
    } satisfies TextStyle,
    heading: {
      fontSize: 16,
      fontFamily: fontFamily.primary.semiBold,
      lineHeight: 24,
    } satisfies TextStyle,
    body: {
      fontSize: 14,
      fontFamily: fontFamily.primary.regular,
      lineHeight: 24,
    } satisfies TextStyle,
    bodyBold: {
      fontSize: 14,
      fontFamily: fontFamily.primary.semiBold,
      lineHeight: 24,
    } satisfies TextStyle,
    small: {
      fontSize: 11,
      fontFamily: fontFamily.primary.regular,
      lineHeight: 16,
    } satisfies TextStyle,
    smallBold: {
      fontSize: 11,
      fontFamily: fontFamily.primary.medium,
      lineHeight: 16,
    } satisfies TextStyle,
  },
  spacing: (v: number) => v * 8,
  screenStyle: {
    backgroundColor: colors.background,
  },
};

export const appThemes = {
  default: defaultTheme,
};
