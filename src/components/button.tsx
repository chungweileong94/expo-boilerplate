import {
  Pressable,
  type PressableProps,
  type StyleProp,
  Text,
  type TextStyle,
  type View,
  type ViewStyle,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { type ThemedStyle, useAppTheme } from "~/lib/theme";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type ButtonProps = {
  ref?: React.Ref<View>;
  title?: string;
  style?: StyleProp<ViewStyle>;
} & PressableProps;

export function Button({ ref, title, ...props }: ButtonProps) {
  const { themed } = useAppTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(scale.value, { duration: 100 }) }],
    };
  });

  return (
    <AnimatedPressable
      ref={ref}
      {...props}
      onPressIn={(e) => {
        scale.value = 0.95;
        props.onPressIn?.(e);
      }}
      onPressOut={(e) => {
        scale.value = 1;
        props.onPressOut?.(e);
      }}
      style={[themed($button), props.style, animatedStyle]}
    >
      <Text style={$buttonText}>{title}</Text>
    </AnimatedPressable>
  );
}

const $button: ThemedStyle<ViewStyle> = (theme) => ({
  alignItems: "center",
  backgroundColor: theme.colors.tint,
  borderRadius: 24,
  elevation: 5,
  flexDirection: "row",
  justifyContent: "center",
  padding: 16,
  shadowColor: "#000",
  shadowOffset: {
    height: 2,
    width: 0,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
});

const $buttonText: TextStyle = {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "600",
  textAlign: "center",
};
