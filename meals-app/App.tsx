import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";

import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesScreen />
    </>
  );
}

registerRootComponent(App);
