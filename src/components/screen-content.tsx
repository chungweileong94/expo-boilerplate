import { Text, type TextStyle, View, type ViewStyle } from "react-native";

import EditScreenInfo from "./edit-screen-info";

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export function ScreenContent({ title, path, children }: ScreenContentProps) {
  return (
    <View style={$container}>
      <Text style={$title}>{title}</Text>
      <View style={$separator} />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
}

const $container: ViewStyle = {
  alignItems: "center",
  flex: 1,
  justifyContent: "center",
};

const $separator: ViewStyle = {
  backgroundColor: "#d1d5db",
  height: 1,
  marginVertical: 30,
  width: "80%",
};

const $title: TextStyle = {
  fontSize: 20,
  fontWeight: "bold",
};
