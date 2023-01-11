import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { height, totalSize, width } from "react-native-dimension";
import colors from "../../config/colors";
import AppText from "../components/AppText";
import { TouchableOpacity } from "react-native";

export default function Setting({
  size = 24,
  color = colors.black,
  children = "Setting 1",
  variant = "Light",
  iconName = "lock",
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      style={styles.setting}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <AntDesign
        name={iconName}
        size={size}
        color={color}
        style={styles.settingIcon}
      />
      <AppText variant={variant} style={styles.settingTitle}>
        {children}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  setting: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: height(3),
  },
  settingIcon: {
    marginRight: width(3),
  },
  settingTitle: {
    fontSize: totalSize(2),
  },
});
