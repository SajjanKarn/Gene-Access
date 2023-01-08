import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TextInput, View } from "react-native";

import { width, height, totalSize } from "react-native-dimension";
import colors from "../../config/colors";

import AppText from "../components/AppText";
import AppInput from "../components/AppInput";
import Button from "../components/Button";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AppText variant="SemiBold" style={styles.headerText}>
        Login
      </AppText>

      {/* Form  */}
      <View style={styles.formContainer}>
        <AppInput placeholder="Email" />
        <AppInput placeholder="Password" />

        <AppText style={styles.forgotPassword}>Forgot Password?</AppText>

        <Button
          font="Poppins-SemiBold"
          activeOpacity={0.8}
          backgroundColor={colors.black}
          textColor={colors.white}
        >
          Login
        </Button>

        <AppText
          variant="Light"
          style={styles.signUp}
          onPress={() => navigation.navigate("Register")}
        >
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
    backgroundColor: colors.white,
  },
  headerText: {
    fontSize: totalSize(3),
    marginTop: height(3),
  },
  formContainer: {
    marginTop: height(5),
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
