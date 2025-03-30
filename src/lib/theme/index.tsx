import { createContext, use, useState } from "react";
import type { StyleProp } from "react-native";
import { colors } from "./colors";

interface Theme {
  colors: typeof colors;
}

interface ThemeContext {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContext | null>(null);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [context] = useState<ThemeContext>({ theme: { colors } });
  return <ThemeContext value={context}>{children}</ThemeContext>;
}

export type ThemedStyle<T> = (theme: Theme) => T;
type ThemedStyleArray<T> = (
  | ThemedStyle<T>
  | StyleProp<T>
  | (StyleProp<T> | ThemedStyle<T>)[]
)[];

export function useAppTheme() {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error("`useTheme` must be used within a `ThemeProvider`");
  }

  const themed = <T,>(
    styleOrStyleFn: ThemedStyle<T> | StyleProp<T> | ThemedStyleArray<T>,
  ) => {
    const flatStyles = [styleOrStyleFn].flat(3);
    const stylesArray = flatStyles.map((f) => {
      if (typeof f === "function") {
        return (f as ThemedStyle<T>)(context.theme);
      }
      return f;
    });
    // Flatten the array of styles into a single object
    return Object.assign({}, ...stylesArray) as T;
  };

  return { theme: context.theme, themed };
}
