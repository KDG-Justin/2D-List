import { View, Text, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { Plus, X, Check } from "lucide-react-native";
import { useToDo } from "../../hooks/useToDo";
import { RemoveToDoModal } from "./RemoveToDoModal";
import { ToDoModal } from "./ToDoModal";
import { UnitModal } from "./UnitModal";

export function ToDoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [removeToDoModalVisible, setRemoveToDoModalVisible] = useState(false);
  const [unitModalVisible, setUnitModalVisible] = useState(false);
  const { toDo } = useToDo();

  return (
    <View className="flex-1 bg-white">
      {toDo.length === 0 ? (
        <View
          className="flex-1 items-center justify-center"
          style={{ backgroundColor: "#ccccff" }}
        >
          <Text
            className="font-pixel text-lg text-gray-500 mb-4"
            style={{ fontSize: 26 }}
          >
            Start your day with a todo
          </Text>
          <Pressable
            onPress={() => setModalVisible(true)}
            className="px-6 py-3 bg-blue-500 rounded-full shadow"
          >
            <Text
              className="font-pixel text-white text-base font-medium"
              style={{ fontSize: 18 }}
            >
              Start
            </Text>
          </Pressable>
        </View>
      ) : (
        <>
          <View
            className="flex-1 p-4 justify-start"
            style={{ backgroundColor: "#ccccff" }}
          >
            <FlatList
              data={toDo}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View className="grid grid-cols-2 gap-4 p-4 mb-2 mt-2 bg-gray-100 rounded-xl shadow-xl">
                  <Text className="font-pixel" style={{ fontSize: 20 }}>
                    {item.text}
                  </Text>

                  <View className="flex-row gap-8">
                    <Pressable onPress={() => setUnitModalVisible(true)}>
                      <Check
                        color={"white"}
                        style={{ backgroundColor: "green" }}
                      />
                    </Pressable>
                    <Pressable onPress={() => setRemoveToDoModalVisible(true)}>
                      <X color={"white"} style={{ backgroundColor: "red" }} />
                    </Pressable>
                  </View>
                  <RemoveToDoModal
                    visible={removeToDoModalVisible}
                    onCancel={() => setRemoveToDoModalVisible(false)}
                    toDoId={item.uuid}
                  ></RemoveToDoModal>
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
      />
      <UnitModal
        visible={unitModalVisible}
        onCancel={() => setUnitModalVisible(false)}
      />
    </View>
  );
}
