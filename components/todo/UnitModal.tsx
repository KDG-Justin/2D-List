import { View, Text, Modal, Pressable } from "react-native";
import React, { useRef } from "react";
import { X } from "lucide-react-native";
import ConfettiCannon from "react-native-confetti-cannon";



interface UnitModalProps {
  visible: boolean;
  onCancel: () => void;
}

export function UnitModal({ visible, onCancel }: UnitModalProps) {
    // get unit -> supabase connection is set dus alleen random generator 


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-4/5 bg-white rounded-2xl p-6 items-start shadow">
          <Text className="font-pixel self-center mb-2" style={{ fontSize: 22 }}>
            Congratulations!
          </Text>

          <View>
            
          </View>

          <Text className="font-pixel self-center mb-2" style={{ fontSize: 18 }}>
            You have received: 
          </Text>
          <View className="flex-row gap-4 pt-4">
            <Pressable
              onPress={onCancel}
              className="px-4 py-2 bg-gray-400 rounded"
            >
              <Text className="font-pixel text-white">
                <X color={"white"}/>
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
