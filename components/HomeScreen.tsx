import { View, Text, TouchableOpacity } from "react-native";

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center" style={{ backgroundColor: "#ccccff" }}>
      <Text>This is the home screen</Text>
      <TouchableOpacity onPress={() => alert("Clicked!")}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}