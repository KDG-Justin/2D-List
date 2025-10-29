import { View, Text, ImageBackground } from "react-native";


export function CollectionScreen() {
  return (
    <ImageBackground
      source={require("../public/assets/appUI/appBG.png")} 
      style={{ flex: 1, width: "100%", height: "100%" }}
      resizeMode="cover"
    >
    <View className="flex-1 items-center justify-center">
      <Text>Collectiones cock</Text>
    </View>
    </ImageBackground>
  );
}