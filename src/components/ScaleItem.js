import { StyleSheet, View } from "react-native";
import { height, width } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "./AppText";

export default function ScaleItem({
  color = colors.green,
  children = "Risk Level: Low",
}) {
  return (
    <View style={styles.scaleItem}>
      <View
        style={[
          styles.scaleItemColor,
          {
            backgroundColor: color,
          },
        ]}
      />
      <AppText variant="Light" style={styles.scaleItemText}>
        {children}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  scaleItemColor: {
    width: width(10),
    height: width(8),
    borderRadius: width(1.5),
    backgroundColor: colors.lightGray,
    marginRight: width(2),
  },
  scaleItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height(1),
  },
});
