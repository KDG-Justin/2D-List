import { ToDo } from "../../model/ToDo";
import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { X, Check } from "lucide-react-native";
import { RemoveToDoModal } from "./modal/RemoveToDoModal";
import { UnitModal } from "./modal/UnitModal";
import { GetPriorityColor } from "../../utils/Functions";

interface ToDoCardProps {
  toDo: ToDo;
}

export function ToDoCard({ toDo }: ToDoCardProps) {
  const [removeToDoModalVisible, setRemoveToDoModalVisible] = useState(false);
  const [unitModalVisible, setUnitModalVisible] = useState(false);

  const borderColor = GetPriorityColor(toDo.priority);

  return (
    <View className="grid grid-cols-2 gap-4 p-4 mb-2 mt-2 bg-gray-100 rounded-xl shadow-xl"
    style={{ borderWidth: 4, borderColor }}
    >
      <Text className="font-pixel" style={{ fontSize: 20 }}>
        {toDo.text}
      </Text>

      <View className="flex-row gap-8">
        <Pressable onPress={() => setUnitModalVisible(true)}>
          <Check color={"white"} style={{ backgroundColor: "green" }} />
        </Pressable>
        <Pressable onPress={() => setRemoveToDoModalVisible(true)}>
          <X color={"white"} style={{ backgroundColor: "red" }} />
        </Pressable>
      </View>
      <RemoveToDoModal
        visible={removeToDoModalVisible}
        onCancel={() => setRemoveToDoModalVisible(false)}
        toDoId={toDo.uuid}
      ></RemoveToDoModal>
      <UnitModal
        visible={unitModalVisible}
        onCancel={() => setUnitModalVisible(false)}
        toDoUuiD={toDo.uuid}
      />
    </View>
  );
}
