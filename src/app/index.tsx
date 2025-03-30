import { Link, Stack } from "expo-router";

import { Button } from "~/components/button";
import { Container } from "~/components/container";
import { ScreenContent } from "~/components/screen-content";
import { t } from "~/lib/i18n";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />
      <Container>
        <ScreenContent path="app/index.tsx" title={t("home:title")} />
        <Link href={{ pathname: "/details", params: { name: "Dan" } }} asChild>
          <Button title={t("home:actions.showDetails")} />
        </Link>
      </Container>
    </>
  );
}
