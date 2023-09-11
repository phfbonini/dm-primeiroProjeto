import { useState } from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5e8fa'
  },
  
  text:{
    fontSize: 18,
    color: '#a1a',
    fontWeight: 'bold'
    

  },
})

export default function App() {

  const [contador, setContador] = useState(0)
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text }>{contador}</Text>
      <Button title='CONTADOR +1'/>
    </SafeAreaView>
  );
}

