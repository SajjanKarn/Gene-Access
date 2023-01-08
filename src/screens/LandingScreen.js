import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";

import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "../components/AppText";
import Button from "../components/Button";

export default function LandingScreen() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <AppText variant="SemiBold" style={styles.headerText}>
          Welcome To Gene-Acess
        </AppText>
        <AppText variant="Light" style={styles.subHeader}>
          Your Medical Records At Your Fingertips
        </AppText>

        <Image
          source={{
            uri: "https://images-platform.99static.com//IgtttscKg4mbdokiS2uFxZmEhVI=/310x284:1006x980/fit-in/590x590/projects-files/37/3792/379277/5f1fa1e1-087f-4f3f-9c35-afc000710eb9.jpg",
          }}
          style={styles.headerImage}
        />

        <Button
          font="Poppins-SemiBold"
          backgroundColor={colors.white}
          textColor={colors.black}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
        <Button
          font="Poppins-SemiBold"
          backgroundColor={`#404040`}
          textColor={colors.white}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width(5),
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    fontSize: totalSize(3),
    textAlign: "center",
    marginTop: height(5),
    color: colors.white,
  },
  subHeader: {
    fontSize: totalSize(1.5),
    textAlign: "center",
    color: colors.white,
  },

  headerImage: {
    width: totalSize(13),
    height: totalSize(13),
    borderRadius: totalSize(13) / 2,
    alignSelf: "center",
    marginVertical: height(5),
  },
});
