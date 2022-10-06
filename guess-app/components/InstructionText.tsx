import { Text, StyleSheet } from "react-native";

import Colors from "../colors";

import type { ReactChildrenProp, ReactNativeStyleProp } from "../types";

function InstructionText({
  children,
  style = {},
}: ReactChildrenProp & ReactNativeStyleProp) {
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
