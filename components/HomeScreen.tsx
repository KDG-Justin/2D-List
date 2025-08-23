import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>This is the home screen</Text>
      <TouchableOpacity onPress={() => alert("Clicked!")}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 32
  },
});
