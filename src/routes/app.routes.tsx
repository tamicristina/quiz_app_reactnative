import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IntroScreen from "../screens/Intro/IntroScreen";
import QuestionsScreen from "../screens/Questions/QuestionsScreen";
import ResultScreen from "../screens/Result/ResultScreen";

function AppRoutes() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="intro"
        component={IntroScreen}
        options={{ headerTransparent: true, title: "" }}
      />
      <Stack.Screen
        name="questions"
        component={QuestionsScreen}
        options={{ headerTransparent: true, title: "" }}
      />
      <Stack.Screen
        name="result"
        component={ResultScreen}
        options={{ headerTransparent: true, title: "" }}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
