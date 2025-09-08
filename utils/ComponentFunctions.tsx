import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

const rainbowColors = [
  "#b22222", 
  "#b25c22", 
  "#b2b222", 
  "#228b22", 
  "#225cb2", 
  "#4b0082",
  "#8b008b", // paars
];

export function RainbowBounceText({ text }: { text: string }) {
  const animatedVals = useRef(
    text.split("").map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    const animations = animatedVals.map((val, i) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(val, {
            toValue: -10,
            duration: 400,
            delay: i * 20, 
            useNativeDriver: true,
          }),
          Animated.timing(val, {
            toValue: 10,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(val, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }),
        ])
      )
    );

    animations.forEach((anim) => anim.start());

    return () => animations.forEach((anim) => anim.stop()); // cleanup
  }, []);

  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      {text.split("").map((char, i) => (
        <Animated.Text
          key={i}
          style={{
            fontSize: 32,
            fontWeight: "bold",
            transform: [{ translateY: animatedVals[i] }],
            color: rainbowColors[i % rainbowColors.length],
          }}
        >
          {char}
        </Animated.Text>
      ))}
    </View>
  );
}