import React from "react";
import { View, Text, StyleSheet, Button } from "react-native"

export default function QuestionsScreen ({navigation}: {navigation:any}){
  return(
    <View style={styles.container}>
      <Text>Questions Screen</Text>
      <Button title="Clica aqui"
    onPress={() => navigation.navigate('result')}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
 