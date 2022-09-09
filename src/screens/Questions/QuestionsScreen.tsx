import { useNavigation, useRoute } from "@react-navigation/native";

import { View, Text, StyleSheet, Button } from "react-native";

export function QuestionsScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const { questions } = route.params;

  return (
    <View style={styles.container}>
      <Text>Questions Screen</Text>
      <Button
        title="Clica aqui"
        onPress={() => navigation.navigate("result")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
