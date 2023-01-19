import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import { width, height, totalSize } from "react-native-dimension";
import colors from "../../config/colors";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CheckupScreen from "../screens/CheckupScreen";
import ReportScreen from "../screens/ReportScreen";
import SequenceScreen from "../screens/SequenceScreen";
import BinaryScreen from "../screens/BinaryScreen";

import TabButton from "../components/TabButton";

const Tab = createBottomTabNavigator();

const SequenceScreenStack = createNativeStackNavigator();

const SequenceScreenStackScreen = () => {
  return (
    <SequenceScreenStack.Navigator initialRouteName="InitialSequenceScreen">
      <SequenceScreenStack.Screen
        name="InitialSequenceScreen"
        component={SequenceScreen}
        options={{ headerShown: false }}
      />
      <SequenceScreenStack.Screen
        name="BinaryScreen"
        component={BinaryScreen}
        options={{
          headerTitle: "Convert to Binary",
        }}
      />
    </SequenceScreenStack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.darkGray,
          tabBarHideOnKeyboard: true,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        <Tab.Screen
          name="CheckupScreen"
          component={CheckupScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="clockcircleo" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ReportScreen"
          component={ReportScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="barschart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" color={color} size={size} />
            ),
            tabBarButton: (props) => <TabButton {...props} />,
          }}
        />
        <Tab.Screen
          name="SequenceScreen"
          component={SequenceScreenStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="bars" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="UserSettings"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="setting" color={color} size={size} />
            ),
            tabBarBadge: 2,
            tabBarBadgeStyle: styles.tabBadge,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: height(2.2),
    left: width(5),
    right: width(5),
    backgroundColor: colors.white,
    borderRadius: totalSize(1),
    height: height(8),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1.5,
  },
  tabBadge: {
    fontSize: totalSize(1.5),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AuthNavigator;
