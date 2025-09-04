import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../components/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { ToDoScreen } from "../components/todo/ToDoScreen";
import { CollectionScreen } from "../components/CollectionScreen";
import { useFonts } from "expo-font";
import "../global.css";
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "VT323": require("../public/assets/fonts/VT323-Regular.ttf"),
  });

  if (!fontsLoaded) {
  return null; //<LoadingScreen />
}

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: "#5C5C99",

          } ,
          tabBarActiveTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#5C5C99",
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="To do"
          component={ToDoScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "pencil" : "pencil-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Collection"
          component={CollectionScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? "folder" : "newspaper-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
