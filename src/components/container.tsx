import { SafeAreaView, type ViewStyle } from "react-native";

export function Container({ children }: { children: React.ReactNode }) {
  return <SafeAreaView style={$container}>{children}</SafeAreaView>;
}

const $container: ViewStyle = {
  flex: 1,
  margin: 24,
};
