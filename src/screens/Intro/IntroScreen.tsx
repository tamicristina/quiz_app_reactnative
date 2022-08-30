import { View, Text, Button } from "react-native"
import React from "react"
import { StyleSheet } from "react-native";



export default function IntroScreen ({navigation}: {navigation: any}){
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

