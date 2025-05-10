import {
  Geist_700Bold as geistBold,
  Geist_300Light as geistLight,
  Geist_500Medium as geistMedium,
  Geist_400Regular as geistRegular,
  Geist_600SemiBold as geistSemiBold,
} from "@expo-google-fonts/geist";
import { useFonts } from "expo-font";
import { useEffect } from "react";

// Trigger font load
export const customFontsToLoad = {
  geistLight,
  geistRegular,
  geistMedium,
  geistSemiBold,
  geistBold,
};

/**
 * Load custom fonts using expo-font.
 * This hook will return true when the fonts are loaded.
 * If there's a font loading error, it will be thrown.
 * ```
 */
export function useCustomFontLoader() {
  const [fontsLoaded, fontError] = useFonts(customFontsToLoad);

  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  return { fontsLoaded };
}
