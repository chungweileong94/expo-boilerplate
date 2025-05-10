import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
import {
  type EdgeInsets,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { create } from "zustand";
import { appThemes } from "./config";

type AppTheme = typeof appThemes.default;

interface ThemeStore {
  theme: AppTheme;
}

const useThemeStore = create<ThemeStore>((_set) => ({
  theme: appThemes.default,
}));

export function useAppTheme() {
  const theme = useThemeStore((state) => state.theme);
  return theme;
}

interface Runtime {
  insets: EdgeInsets;
}

type Style = ViewStyle | TextStyle | ImageStyle;
type NamedStyles<T> = {
  // biome-ignore lint/suspicious/noExplicitAny: necessary
  [P in keyof T]: Style | ((...args: any[]) => Style);
};
type ThemedStyleSheetCreateFunc<T> = (theme: AppTheme, rt: Runtime) => T;

export const ThemedStyleSheet = {
  /**
   * Just like `StyleSheet.create`, but with theme support.
   */
  // biome-ignore lint/suspicious/noExplicitAny: necessary
  create: <T extends NamedStyles<T> | NamedStyles<any>>(
    // biome-ignore lint/suspicious/noExplicitAny: necessary
    createFunc: ThemedStyleSheetCreateFunc<T & NamedStyles<any>>,
  ): ThemedStyleSheetCreateFunc<T> => {
    return createFunc;
  },
};

// biome-ignore lint/suspicious/noExplicitAny: I know better
export function useThemedStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  themedStyles: ThemedStyleSheetCreateFunc<T>,
) {
  const theme = useAppTheme();
  const insets = useSafeAreaInsets();
  return themedStyles(theme, { insets });
}
