import React from "react";
import { View, Text, StyleSheet, Button } from "react-native"

export default function ResultScreen ({navigation}: {navigation:any}){
  return(
    <View style={styles.container}>
      <Text>Result Screen</Text>
    
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
 