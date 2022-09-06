import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IntroScreen, QuestionsScreen, ResultScreen } from "../screens/index";

function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      screenOptions={{
        headerTransparent: true,
        title: "",
      }}
      initialRouteName="intro"
    >
      <Screen name="intro" component={IntroScreen} />
      <Screen name="questions" component={QuestionsScreen} />
      <Screen name="result" component={ResultScreen} />
    </Navigator>
  );
}

export default AppRoutes;
