import "expo-dev-client";

import { Stack } from "expo-router";
import { initI18n } from "~/lib/i18n";
import { useCustomFontLoader } from "~/lib/theme/font";

initI18n();

export default function Layout() {
  const { fontsLoaded } = useCustomFontLoader();
  if (!fontsLoaded) {
    return null;
  }
  return <Stack />;
}
