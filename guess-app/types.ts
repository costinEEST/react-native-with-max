import type { ReactNode } from "react";
import type { FlexStyle, ViewStyle, TextStyle, ImageStyle } from "react-native";

export interface ReactChildrenProp {
  // https://stackoverflow.com/a/70517517/1904223
  children?: ReactNode | string;
}
export interface GuessLogItemProps {
  roundNumber: number;
  guess: number;
}

export interface ReactNativeStyleProp {
  /**
   * Add more types to the union if needed, https://www.saltycrane.com/cheat-sheets/typescript/react/latest/#react-native
   * See also "../node_modules/@types/react-native/index.d.ts"
   * */
  style?: FlexStyle | ViewStyle | TextStyle | ImageStyle;
}

export interface CallbackProp {
  [key: string]: () => void;
}

export interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}

export interface PrimaryButtonProps {
  children?: ReactNode | string;
  onPress: () => void;
}
