import { StyleSheet, TextInput, View } from "react-native";

import { width, height, totalSize } from "react-native-dimension";
import colors from "../../config/colors";
import AppText from "../components/AppText";
import Button from "../components/Button";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <AppText variant="SemiBold" style={styles.headerText}>
        Login
      </AppText>

      {/* Form  */}
      <View style={styles.formContainer}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />

        <AppText style={styles.forgotPassword}>Forgot Password?</AppText>

        <Button
          font="Poppins-SemiBold"
          activeOpacity={0.8}
          backgroundColor={colors.black}
          textColor={colors.white}
        >
          Login
        </Button>

        <AppText variant="Light" style={styles.signUp}>
          Don't have an account? Register
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width(5),
  },
  headerText: {
    fontSize: totalSize(3),
    marginTop: height(3),
  },
  formContainer: {
    marginTop: height(5),
  },
  input: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: width(5),
    paddingVertical: height(1.8),
    borderRadius: totalSize(10),
    marginBottom: height(2),
  },
  forgotPassword: {
    color: colors.black,
    fontSize: totalSize(1.5),
    marginBottom: height(2),
    marginLeft: width(2),
    marginVertical: height(1),
  },
  signUp: {
    color: colors.black,
    fontSize: totalSize(1.5),
    marginBottom: height(2),
    marginLeft: width(2),
    marginVertical: height(1),
    textAlign: "center",
  },
});
