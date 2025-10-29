import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import React, { useState } from "react";
import { Plus, } from "lucide-react-native";
import { useToDo } from "../../hooks/useToDo";
import { ToDoModal } from "./modal/TodoModal";
import { ToDoCard } from "./ToDoCard";

export function ToDoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const { toDo } = useToDo();

  return (
    <ImageBackground
      source={require("../../public/assets/appUI/appBG.png")} 
      style={{ flex: 1, width: "100%", height: "100%" }}
      resizeMode="cover"
    >
    <View className="flex-1">
      {toDo.length === 0 ? (
        <View
          className="flex-1 items-center justify-center"
        >
          <Text
            className="font-pixel text-lg text-white mb-4"
            style={{ fontSize: 26 }}
          >
            No Tasks for this Category
          </Text>
          <Pressable
            onPress={() => setModalVisible(true)}
            className="px-6 py-3 bg-blue-500 rounded-full shadow"
          >
            <Text
              className="font-pixel text-white text-base font-medium"
              style={{ fontSize: 18 }}
            >
              Let's Start
            </Text>
          </Pressable>
        </View>
      ) : (
        <>
          <View
            className="flex-1 p-4 justify-start"
          >
            <FlatList
              data={toDo}
              keyExtractor={(item) => item.uuid}
              renderItem={({ item }) => (
                <ToDoCard toDo={item}/>
              )}
            />
          </View>
          <Pressable
            onPress={() => setModalVisible(true)}
            className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-blue-500 items-center justify-center shadow-lg"
          >
            <Plus size={28} color="white" strokeWidth={2.5} />
          </Pressable>
        </>
      )}
      <ToDoModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
      />
    </View>
    </ImageBackground>
  );
}