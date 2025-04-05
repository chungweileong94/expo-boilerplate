import type { StyleSheet } from "react-native";
import { create } from "zustand";
import { colors } from "./colors";
import { spacing } from "./spacing";

interface Theme {
  colors: typeof colors;
  spacing: typeof spacing;
}

interface ThemeStore {
  theme: Theme;
}

const useThemeStore = create<ThemeStore>((_set) => ({
  theme: { colors, spacing },
}));

type NamedStyles<T> = StyleSheet.NamedStyles<T>;

export const ThemedStyleSheet = {
  /**
   * Just like `StyleSheet.create`, but with theme support.
   */
  // biome-ignore lint/suspicious/noExplicitAny: I know better
  create: <T extends NamedStyles<T> | NamedStyles<any>>(
    // biome-ignore lint/suspicious/noExplicitAny: I know better
    createFunc: (theme: Theme) => T & NamedStyles<any>,
  ): ((theme: Theme) => T) => {
    return createFunc;
  },
};

// biome-ignore lint/suspicious/noExplicitAny: I know better
export function useThemedStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  themedStyles: (theme: Theme) => T,
) {
  const theme = useThemeStore((state) => state.theme);
  return themedStyles(theme);
}
