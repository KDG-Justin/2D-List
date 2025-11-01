import { View, Image, Pressable } from "react-native";
import { Card } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CategoryStackParamList } from "./CategoryStack";
import { FeaturedTile } from "@rneui/themed/dist/Tile";

interface CategoryCardProps {
  uuid: string;
  name: string;
  image: string;
  amountOfToDos: number; 
}

export type CategoryNavigationProp = NativeStackNavigationProp<CategoryStackParamList,"CategoryScreen">;


export function CategoryCard({ uuid, name, image, amountOfToDos }: CategoryCardProps) {
  const navigation = useNavigation<CategoryNavigationProp>();

  return (
    <Pressable onPress={() => navigation.navigate("ToDoScreen", { uuid })}>
      <Card containerStyle={{ padding: 10 }}>
        <Card.Title className="font-pixel text-lg text-white mb-4">
          {name}
        </Card.Title>
        <Card.Divider />

        <View style={{ position: "relative", alignItems: "center" }}>
          <Image
            style={{ width: "100%", height: 100 }}
            resizeMode="contain"
            source={require(image)}
          />
        </View>

         <Card.Divider />
         <FeaturedTile>
          {amountOfToDos} Tasks
         </FeaturedTile>
      </Card>
    </Pressable>
  );
}
