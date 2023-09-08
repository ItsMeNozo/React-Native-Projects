import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="User">
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <AntDesign name="home" size={size} color={color} />;
            },
            tabBarActiveTintColor: "#c99",
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <AntDesign name="user" size={size} color={color} />;
            },
            tabBarActiveTintColor: "#c99",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
