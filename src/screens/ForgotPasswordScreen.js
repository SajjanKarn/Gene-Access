import { StyleSheet, Text, View } from "react-native";

import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "../components/AppText";

export default function ForgotPasswordScreen() {
  return (
    <View style={styles.container}>
      <AppText variant="SemiBold" style={styles.headerText}>
        Forgot Password ?
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width(5),
  },
  headerText: {
    fontSize: totalSize(3),
    marginTop: height(3),
  },
});
