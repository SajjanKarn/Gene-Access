import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../config/colors";

import LandingScreen from "../screens/LandingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import TabButton from "../components/TabButton";

const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Landing"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            backgroundColor: colors.white,
            borderRadius: 10,
            height: 60,
            shadowColor: colors.black,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          },
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.darkGray,
        }}
      >
        <Tab.Screen
          name="Landing"
          component={LandingScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="login" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={LandingScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" color={color} size={size} />
            ),
            tabBarButton: (props) => <TabButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="questioncircleo" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
