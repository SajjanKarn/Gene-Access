import { StyleSheet } from "react-native";

import AuthStack from "./AuthScreen";
import AuthNavigator from "./AuthNavigation";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function AuthRender() {
  const { user } = useContext(AuthContext);

  return <>{user ? <AuthNavigator /> : <AuthStack />}</>;
}

const styles = StyleSheet.create({});
