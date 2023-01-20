import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";

import { width, height, totalSize } from "react-native-dimension";

import colors from "../../config/colors";
import AppText from "../components/AppText";
import Button from "../components/Button";
import Spacer from "../components/Spacer";

export default function LandingScreen() {
  const navigation = useNavigation();

  return (
    <>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
        style={styles.screenBackgroundImage}
      />
      <View style={styles.blurOverlay} />

      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <AppText variant="Bold" style={styles.title}>
            Welcome to GenoSys
          </AppText>
          <View style={styles.footerContainer}>
            <AppText variant="Light" style={styles.footerText}>
              A platform to help you understand your genetic data and make
              informed decisions about your health.
            </AppText>
          </View>
          <Button
            backgroundColor={colors.lightRed2}
            textColor={colors.white}
            onPress={() => navigation.navigate("Login")}
          >
            Get Started
          </Button>

          <Spacer size={height(2)} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width(5),
    flex: 1,
    justifyContent: "center",
  },
  screenBackgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  blurOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: colors.black,
    opacity: 0.75,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: totalSize(3.8),
    color: colors.white,
    textAlign: "center",
  },
  footerContainer: {
    marginVertical: height(2),
  },
  footerText: {
    fontSize: totalSize(1.8),
    color: colors.white,
    textAlign: "center",
  },
});
