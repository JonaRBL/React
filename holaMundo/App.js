import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

const Texto=(props)=>{
  const {children} = props
  return(
    <Text> {children} </Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto >uno</Texto>
      <Texto >dos</Texto>
      {/* <Texto /> */}
      {/* <Text>Hola mundo ReactNative</Text> */}
      <Button title='Saludar' color='green'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
