import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Meals categories" component={CategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

registerRootComponent(App);
