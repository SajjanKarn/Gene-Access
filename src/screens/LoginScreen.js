import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";

import AppText from "../components/AppText";
import AppInput from "../components/AppInput";
import Button from "../components/Button";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function LoginScreen() {
  const navigation = useNavigation();
  const { login } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <AppText variant="SemiBold" style={styles.headerText}>
        Login
      </AppText>

      {/* Form  */}
      <View style={styles.formContainer}>
        <AppInput placeholder="Email" />
        <AppInput
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
        />

        <AppText
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgot Password?
        </AppText>

        <Button
          font="Poppins-SemiBold"
          activeOpacity={0.8}
          backgroundColor={colors.black}
          textColor={colors.white}
          onPress={() => login()}
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
    </ScrollView>
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
