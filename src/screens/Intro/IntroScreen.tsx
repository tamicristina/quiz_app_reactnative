import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native"
import { StyleSheet } from "react-native";



export function IntroScreen (){
  const navigation = useNavigation<any>()
  return(
    <View style={styles.container}>
      <Text>Intro Screen </Text>
    <Button title="Clica aqui"
    onPress={() => navigation.navigate('questions')}
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

