import {
  Pressable,
  type PressableProps,
  type StyleProp,
  Text,
  type View,
  type ViewStyle,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ThemedStyleSheet, useThemedStyles } from "~/lib/theme";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type ButtonProps = {
  ref?: React.Ref<View>;
  title?: string;
  style?: StyleProp<ViewStyle>;
} & Omit<PressableProps, "children">;

export function Button({ ref, title, ...props }: ButtonProps) {
  const scale = useSharedValue(1);
  const style = useThemedStyles(themedStyles);

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
      style={[style.button, props.style, animatedStyle]}
    >
      <Text style={style.buttonText}>{title}</Text>
    </AnimatedPressable>
  );
}

const themedStyles = ThemedStyleSheet.create((theme) => ({
  button: {
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
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
}));
