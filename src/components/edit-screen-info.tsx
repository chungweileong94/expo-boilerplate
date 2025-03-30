import { Text, type TextStyle, View, type ViewStyle } from "react-native";
import { t } from "~/lib/i18n";

export default function EditScreenInfo({ path }: { path: string }) {
  const title = t("tutorial:title");
  const description = t("tutorial:description");

  return (
    <View style={$getStartedContainer}>
      <Text style={$getStartedText}>{title}</Text>
      <View style={[$codeHighlightContainer, $homeScreenFilename]}>
        <Text>{path}</Text>
      </View>
      <Text style={$getStartedText}>{description}</Text>
    </View>
  );
}

const $codeHighlightContainer: ViewStyle = {
  borderRadius: 3,
  paddingHorizontal: 4,
};

const $getStartedContainer: ViewStyle = {
  alignItems: "center",
  marginHorizontal: 50,
};

const $getStartedText: TextStyle = {
  fontSize: 17,
  lineHeight: 24,
  textAlign: "center",
};

const $homeScreenFilename: ViewStyle = {
  marginVertical: 7,
};
