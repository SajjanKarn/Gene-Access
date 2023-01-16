import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { width, height, totalSize } from "react-native-dimension";
import colors from "../../config/colors";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CheckupScreen from "../screens/CheckupScreen";
import ReportScreen from "../screens/ReportScreen";
import SequenceScreen from "../screens/SequenceScreen";

import TabButton from "../components/TabButton";

const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
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
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.darkGray,
          tabBarHideOnKeyboard: true,
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
          component={SequenceScreen}
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
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
