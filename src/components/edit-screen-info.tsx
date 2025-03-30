import { Text, type TextStyle, View, type ViewStyle } from "react-native";

export default function EditScreenInfo({ path }: { path: string }) {
  const title = "Open up the code for this screen:";
  const description =
    "Change any of the text, save the file, and your app will automatically update.";

  return (
    <View style={$styles.getStartedContainer}>
      <Text style={$styles.getStartedText}>{title}</Text>
      <View
        style={[$styles.codeHighlightContainer, $styles.homeScreenFilename]}
      >
        <Text>{path}</Text>
      </View>
      <Text style={$styles.getStartedText}>{description}</Text>
    </View>
  );
}

const $styles = {
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  } satisfies ViewStyle,
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  } satisfies ViewStyle,
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  } satisfies TextStyle,
  helpContainer: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 15,
  } satisfies ViewStyle,
  helpLink: {
    paddingVertical: 15,
  } satisfies ViewStyle,
  helpLinkText: {
    textAlign: "center",
  } satisfies TextStyle,
  homeScreenFilename: {
    marginVertical: 7,
  } satisfies ViewStyle,
};
