import { StatusBar, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

import AuthStack from "./src/navigation/AuthScreen";
import AuthNavigator from "./src/navigation/AuthNavigation";

import ReportScreen from "./src/screens/ReportScreen";
import SequenceScreen from "./src/screens/SequenceScreen";
import ListPatientScreen from "./src/screens/ListPatientScreen";
import CheckupScreen from "./src/screens/CheckupScreen";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <AuthStack /> */}
      <HomeScreen />
      {/* <AuthNavigator /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
