import { Text, type TextStyle, View, type ViewStyle } from "react-native";

import EditScreenInfo from "./edit-screen-info";

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export function ScreenContent({ title, path, children }: ScreenContentProps) {
  return (
    <View style={$styles.container}>
      <Text style={$styles.title}>{title}</Text>
      <View style={$styles.separator} />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
}

const $styles = {
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  } satisfies ViewStyle,
  separator: {
    backgroundColor: "#d1d5db",
    height: 1,
    marginVertical: 30,
    width: "80%",
  } satisfies ViewStyle,
  title: {
    fontSize: 20,
    fontWeight: "bold",
  } satisfies TextStyle,
};
