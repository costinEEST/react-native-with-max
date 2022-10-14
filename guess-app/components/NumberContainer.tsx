import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

import Colors from "../colors";

import type { ReactChildrenProp } from "../types";

function NumberContainer({ children }: ReactChildrenProp) {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        { padding: width < 380 ? 12 : 24, margin: width < 380 ? 12 : 24 },
      ]}
    >
      <Text style={[styles.numberText, { fontSize: width < 380 ? 28 : 36 }]}>
        {children}
      </Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});
