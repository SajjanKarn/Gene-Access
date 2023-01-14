import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "./AppText";

export default function ReportCard({
  image,
  variant = "Light",
  children,
  onPress,
  subText,
  backgroundColor,
}) {
  const percentage = parseInt(subText.split("%")[0]);
  if (percentage > 50) {
    backgroundColor = colors.red;
  } else if (percentage > 30) {
    backgroundColor = colors.lightRed2;
  } else if (percentage > 20) {
    backgroundColor = colors.lightRed2;
  } else if (percentage > 10 && percentage < 20) {
    backgroundColor = colors.lightRed;
  } else if (percentage < 10) {
    backgroundColor = colors.green;
  } else {
    backgroundColor = colors.lightGray;
  }

  return (
    <TouchableOpacity
      style={[
        styles.reportCard,
        {
          backgroundColor: backgroundColor ? backgroundColor : colors.lightGray,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.4}
    >
      {image && (
        <Image
          source={{
            uri: image,
          }}
          style={styles.reportImage}
        />
      )}
      <AppText variant={variant} style={styles.reportTitle}>
        {children}
      </AppText>
      {subText && (
        <AppText variant="Light" style={styles.reportSubTitle}>
          {subText}
        </AppText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  reportCard: {
    width: width(40),
    paddingHorizontal: width(5),
    paddingVertical: height(3),
    overflow: "hidden",
    backgroundColor: colors.lightGray,
    borderRadius: width(3),
    alignItems: "center",
    marginVertical: height(1),
    marginHorizontal: width(2),
  },
  reportImage: {
    width: totalSize(9),
    height: totalSize(9),
  },
  reportTitle: {
    marginTop: height(1.2),
    fontSize: totalSize(2),
  },
  reportSubTitle: {
    marginTop: height(0.5),
    fontSize: totalSize(1.5),
  },
});
