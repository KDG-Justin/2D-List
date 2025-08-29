import { View, Text, Modal, Pressable } from "react-native";

interface TodoModalProps {
  visible: boolean;
  onCancel: () => void;
  onAdd: () => void;
}

export function ToDoModal({ visible, onCancel, onAdd }: TodoModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel} // voor Android back button
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-4/5 bg-white rounded-2xl p-6 items-center shadow">
          <Text className="font-pixel text-lg mb-4">Hello 👋</Text>

          <View className="flex-row gap-4">
            <Pressable
              onPress={onCancel}
              className="px-4 py-2 bg-gray-400 rounded"
            >
              <Text className="font-pixel text-white">Cancel</Text>
            </Pressable>

            <Pressable
              onPress={onAdd}
              className="px-4 py-2 bg-green-500 rounded"
            >
              <Text className="font-pixel text-white">Add</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
