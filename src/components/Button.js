import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { width, height, totalSize } from "react-native-dimension";
import colors from "../../config/colors";

export default function Button({
  children,
  onPress,
  font,
  backgroundColor,
  textColor,
  ...props
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: backgroundColor ? backgroundColor : colors.white },
      ]}
      {...props}
    >
      <Text
        style={[
          styles.buttonText,
          { fontFamily: font ? font : "Poppins-Medium" },
          { color: textColor ? textColor : colors.black },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    width: "100%",
    height: height(7),
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: height(1),
  },
  buttonText: {
    fontSize: totalSize(2),
  },
});
