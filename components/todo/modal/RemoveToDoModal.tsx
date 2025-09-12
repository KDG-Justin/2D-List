import { useToDo } from "../../../hooks/useToDo";
import { View, Text, Modal, Pressable } from "react-native";


interface RemoveToDoModalProps {
  visible: boolean;
  onCancel: () => void;
  toDoId: string; 
}

export function RemoveToDoModal({visible, onCancel, toDoId} : RemoveToDoModalProps){
    const {removeToDo} = useToDo(); 


    async function handleSubmit(removedToDoId : string){
        await removeToDo(removedToDoId); 
        onCancel(); 
    }

    return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-4/5 rounded-2xl p-6 items-start shadow" style={{backgroundColor: "#292966"}}>
          <Text className="font-pixel self-start mb-2" style={{fontSize: 22, color: "#fff"}}>
            Are you sure you want to remove this To-Do?
          </Text>
        


          <View className="flex-row gap-4 pt-4">
            <Pressable
              onPress={onCancel}
              className="px-4 py-2 bg-gray-500 rounded"
            >
              <Text className="font-pixel text-white" style={{fontSize: 18}}>No </Text>
            </Pressable>

            <Pressable
              onPress={() => handleSubmit(toDoId)}
              className="px-4 py-2 bg-red-600 rounded"
            >
              <Text className="font-pixel text-white" style={{fontSize: 18}}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}