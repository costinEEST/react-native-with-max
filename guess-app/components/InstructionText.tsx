import { Text, StyleSheet } from "react-native";

import Colors from "../colors";

import type { ReactChildrenProp, ReactNativeStylesProp } from "../types";

function InstructionText({
  children,
  style = {},
}: ReactChildrenProp & ReactNativeStylesProp) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
