import { View, StyleSheet, useWindowDimensions } from "react-native";

import type { ReactChildrenProp } from "../types";

import Colors from "../colors";

function Card({ children }: ReactChildrenProp) {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        styles.card,
        {
          marginTop: width < 380 ? 18 : 36,
          shadowOffset: { width: 0, height: 2 },
        },
      ]}
    >
      {children}
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
