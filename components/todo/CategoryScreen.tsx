import { View, Text, FlatList, Pressable } from "react-native";
import { Plus } from "lucide-react-native";
import React, { useState } from "react";

export function CategoryScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    

    return (
    <View>
      <Pressable
        onPress={null}
        className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-blue-500 items-center justify-center shadow-lg"
      >
        <Plus size={28} color="white" strokeWidth={2.5} />
      </Pressable>
    </View>
  );
}
