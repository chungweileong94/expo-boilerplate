import { SafeAreaView, type ViewStyle } from "react-native";

export function Container({ children }: { children: React.ReactNode }) {
  return <SafeAreaView style={$styles.container}>{children}</SafeAreaView>;
}

const $styles = {
  container: {
    flex: 1,
    margin: 24,
  } satisfies ViewStyle,
};
