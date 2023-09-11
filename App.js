import { useEffect, useState } from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MyButton from './src/components/MyButton';
import Card from './src/components/Card';

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

  paragrafo:{
    fontSize: 30,
  }
})

export default function App() {
  const [contador, setContador] = useState(0)
  const [showMessage, setShowMessage] =  useState(false)
  useEffect(() => {
    console.log('montagem')
  }, [] )

  useEffect(() => {
    console.log('Atualizado contador')
  }, [contador] )

  useEffect(() => {
    console.log('Atualizado message')
  }, [showMessage] )
  
  const increment = () => {
    setContador(contador + 1);
  };

  const decrement = () => {
    setContador(contador - 1);
  };

  
  const zerar = () => {
    setContador(contador == 0);
  };

  const onPressBotaoTexto = () => {
    setShowMessage(!showMessage)
  }

  return (
    <SafeAreaView style={style.container}>  
    <Text style={style.paragrafo}>Paragrafo</Text>
      {
        showMessage ? (<Text style={style.text }>o rato roeu a roupa do rei de roma</Text>) : <></>
      }
      <Button title='ALTERAR MENSAGEM' onPress={onPressBotaoTexto}/>
  
      <Text style={style.text }>{contador}</Text>
      <MyButton title='CONTADOR +1' onPressButton={increment}/>
      <MyButton title='CONTADOR -1' onPressButton={decrement}/>
      <MyButton title='ZERAR' onPressButton={zerar}/>
      <Card
        title={'Paisagem'}
        content={'Paisagem natural representada'}
        imgUrl={'https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg'}
      />

    </SafeAreaView>
  );
}


