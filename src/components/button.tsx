import { forwardRef } from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type ButtonProps = {
  title?: string;
  style?: StyleProp<ViewStyle>;
} & PressableProps;

export const Button = forwardRef<View, ButtonProps>(({ title, ...props }, ref) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return { transform: [{ scale: withTiming(scale.value, { duration: 100 }) }] };
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
      style={[styles.button, props.style, animatedStyle]}>
      <Text style={styles.buttonText}>{title}</Text>
    </AnimatedPressable>
  );
});

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#6366F1',
    borderRadius: 24,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
