import { View, Text, Modal, Pressable, TextInput } from "react-native";
import { ToDoData } from "../../model/ToDo";
import { useForm, Controller } from "react-hook-form";
import { useToDo } from "../../hooks/useToDo";

interface ToDoModalProps {
  visible: boolean;
  onCancel: () => void;
}

export function ToDoModal({ visible, onCancel }: ToDoModalProps) {
  const { addToDo } = useToDo();
  const { handleSubmit, control, reset, formState: { errors } } = useForm<ToDoData>({
    defaultValues: {
      text: "",
    },
  });

  
  const submit = async (data: ToDoData) => {
    await addToDo(data); 
    reset();
    onCancel(); 
  };
  

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-4/5 bg-white rounded-2xl p-6 items-start shadow">
          <Text className="font-pixel self-start mb-2" style={{fontSize: 22}}>
            What do you need done?
          </Text>

          <Controller
            control={control}
            name="text"
            rules={{ required: "An ampty to-do does not exist." }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                placeholder="Enter your task..."
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.text && (
            <Text className="text-red-500 text-xs mb-2">
              {errors.text.message}
            </Text>
          )}


          <View className="flex-row gap-4 pt-4">
            <Pressable
              onPress={onCancel}
              className="px-4 py-2 bg-gray-400 rounded"
            >
              <Text className="font-pixel text-white">Cancel</Text>
            </Pressable>

            <Pressable
              onPress={handleSubmit(submit)}
              className="px-4 py-2 bg-blue-500 rounded"
            >
              <Text className="font-pixel text-white">Add</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
