import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

export function HomeScreen() {
  return (
    <ImageBackground
      source={require("../public/assets/appUI/appBG.png")} 
      style={{ flex: 1, width: "100%", height: "100%" }}
      resizeMode="cover"
    >
    <View className="flex-1 items-center justify-center">
      <Text>This is the home screen</Text>
      <TouchableOpacity onPress={() => alert("Clicked!")}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}