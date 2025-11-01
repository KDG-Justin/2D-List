import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoryScreen } from "./CategoryScreen";
import { ToDoScreen } from "./ToDoScreen";


export type CategoryStackParamList = {
  CategoryScreen: undefined;
  ToDoScreen: { uuid: string };
};

const Stack = createNativeStackNavigator<CategoryStackParamList>();

export default function CategoryStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="ToDoScreen" component={ToDoScreen} />
    </Stack.Navigator>
  );
}