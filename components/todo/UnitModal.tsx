import { View, Text, Modal, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react-native";
import { Image } from "expo-image";
import ConfettiCannon from "react-native-confetti-cannon";
import { RainbowBounceText } from "../../utils/ComponentFunctions";

interface UnitModalProps {
  visible: boolean;
  onCancel: () => void;
}

export function UnitModal({ visible, onCancel }: UnitModalProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  // get unit -> supabase connection is set dus alleen random generator

  useEffect(() => {
    if (visible) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 20000);
      return () => clearTimeout(timer);
    }
  }, [visible]);


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-4/5 bg-white rounded-2xl p-6 items-center shadow" style={{backgroundColor: "#292966"}}>
          <Text
            className="font-pixel self-center mb-2"
          >
            <RainbowBounceText text="Congratulations!"/>
          </Text>

          <Image
            source={{
              uri: "https://odbmihbxlezglbdszqhc.supabase.co/storage/v1/object/sign/pool1/unit_1.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yY2ZhODJkNC1mNWM4LTQ5ZTctYmI4NS0zYmViNjc4ZWNhYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb29sMS91bml0XzEuZ2lmIiwiaWF0IjoxNzU3MzQyNDk0LCJleHAiOjE3NTc0Mjg4OTR9.EFvEHOsQRtlDxscH56itSzv_Sm368Tiun4qpuUSonVw",
            }}
            style={{ width: 150, height: 150, backgroundColor: "#292966" }}
            contentFit="contain"
          />

          <Text
            className="font-pixel self-center mb-2"
            style={{ fontSize: 24, color:"#fff" }}
          >
            You have received:
          </Text>
          <View className="flex-row gap-4 pt-4">
            <Pressable
              onPress={onCancel}
              className="px-4 py-2 bg-gray-600 rounded"
            >
              <Text className="font-pixel text-white">
                <X color={"white"} />
              </Text>
            </Pressable>
          </View>
          {showConfetti && (
          <ConfettiCannon
            count={150}              
            origin={{ x: 0, y: 0 }} 
            fadeOut={true}          
          />
        )}
        </View>
      </View>
    </Modal>
  );
}
