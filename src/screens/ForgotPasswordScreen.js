import { Image, ScrollView, StyleSheet, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";

import AppInput from "../components/AppInput";
import AppText from "../components/AppText";
import Button from "../components/Button";

export default function ForgotPasswordScreen() {
  return (
    <ScrollView style={styles.container}>
      <AppText variant="SemiBold" style={styles.headerText}>
        Forgot Password ?
      </AppText>

      <View style={styles.formContainer}>
        <AppText variant="Light" style={styles.text}>
          Enter your email address below and we will send you a link to reset
          your password.
        </AppText>

        <Image
          source={require("../../assets/images/forgot.png")}
          style={styles.forgotImage}
        />

        <AppInput placeholder="Email" />

        <Button
          font="Poppins-SemiBold"
          activeOpacity={0.8}
          backgroundColor={colors.black}
          textColor={colors.white}
        >
          Send Reset Link
        </Button>
      </View>
    </ScrollView>
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
  formContainer: {
    marginTop: height(5),
  },
  forgotImage: {
    width: width(60),
    height: height(20),
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: height(2),
  },

  text: {
    marginBottom: height(2),
  },
});
