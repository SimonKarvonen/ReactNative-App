import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Navigation/Home";
import UserCard from "./Navigation/UserCard";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="UserCard"
          component={UserCard}
          options={{ title: "User Card" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
