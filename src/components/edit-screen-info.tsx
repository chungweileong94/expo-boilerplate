import { StyleSheet, Text, View } from "react-native";
import { t } from "~/lib/i18n";

export default function EditScreenInfo({ path }: { path: string }) {
  const title = t("tutorial:title");
  const description = t("tutorial:description");

  return (
    <View style={styles.getStartedContainer}>
      <Text style={styles.getStartedText}>{title}</Text>
      <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <Text>{path}</Text>
      </View>
      <Text style={styles.getStartedText}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
});
