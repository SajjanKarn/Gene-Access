import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import { getPercentageColor } from "../../utils/percentage";

import AppText from "./AppText";

export default function ReportCard({
  image,
  variant = "Light",
  children,
  onPress,
  percentage,
  subText,
  backgroundColor,
}) {
  if (percentage) backgroundColor = getPercentageColor(percentage);

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
      {percentage && (
        <AppText variant="Light" style={styles.reportSubTitle}>
          {percentage}%
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
