import { Link, Stack } from "expo-router";
import { Text, type TextStyle } from "react-native";

import { Container } from "~/components/container";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Container>
        <Text style={$title}>This screen doesn't exist.</Text>
        <Link href="/" style={$link}>
          <Text style={$linkText}>Go to home screen!</Text>
        </Link>
      </Container>
    </>
  );
}

const $title: TextStyle = {
  fontSize: 20,
  fontWeight: "bold",
};

const $link: TextStyle = {
  marginTop: 16,
  paddingVertical: 16,
};

const $linkText: TextStyle = {
  fontSize: 14,
  color: "#2e78b7",
};
