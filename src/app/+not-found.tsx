import { Link, Stack } from "expo-router";
import { Text, type TextStyle, type ViewStyle } from "react-native";

import { Container } from "~/components/container";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Container>
        <Text style={$styles.title}>This screen doesn't exist.</Text>
        <Link href="/" style={$styles.link}>
          <Text style={$styles.linkText}>Go to home screen!</Text>
        </Link>
      </Container>
    </>
  );
}

const $styles = {
  title: {
    fontSize: 20,
    fontWeight: "bold",
  } satisfies TextStyle,
  link: {
    marginTop: 16,
    paddingVertical: 16,
  } satisfies ViewStyle,
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  } satisfies TextStyle,
};
