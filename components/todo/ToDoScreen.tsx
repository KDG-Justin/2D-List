import { View, Text, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { ToDoModal } from "./TodoModal";
import { Plus } from "lucide-react-native";

export function ToDoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [todoList, setTodoList] = useState<string[]>([]);

  function checkList(list : []) : boolean{
    const isEmpty : boolean = true; 
    if (list.length > 0) return isEmpty; 
    return !isEmpty;
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      {todoList.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Text className="font-pixel text-lg text-gray-500 mb-4" style={{fontSize: 26}}>
            Start your day with a todo
          </Text>
          <Pressable
            onPress={() => setModalVisible(true)}
            className="px-6 py-3 bg-blue-500 rounded-full shadow"
          >
            <Text className="font-pixel text-white text-base font-medium" style={{fontSize: 18}}>Start</Text>
          </Pressable>
        </View>
      ) : (
        <>
          <View className="flex-1 p-4">
            <FlatList
              data={todoList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View className="p-4 mb-2 bg-gray-100 rounded-xl">
                  <Text className="text-base">{item}</Text>
                </View>
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
        onAdd={() => {
          console.log("Todo added!");
          setModalVisible(false);
        }}
      />
    </View>
  );
}