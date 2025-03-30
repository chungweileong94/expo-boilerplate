import { SafeAreaView, StyleSheet } from "react-native";

export function Container({ children }: { children: React.ReactNode }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
});
