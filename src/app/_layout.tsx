import { Stack } from "expo-router";
import { initI18n } from "~/lib/i18n";
import { AppThemeProvider } from "~/lib/theme";

initI18n();

export default function Layout() {
  return (
    <AppThemeProvider>
      <Stack />
    </AppThemeProvider>
  );
}
