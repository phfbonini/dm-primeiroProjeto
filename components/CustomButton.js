import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ backgroundColor, textColor, onPress }) => {
  const buttonStyles = {
    backgroundColor: backgroundColor || 'blue', // Use blue as default if not provided
    
  };

  const textStyles = {
    color: textColor || 'white', // Use white as default if not provided
  };

  return (
    <TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyles]}>Clique Aqui</Text>
    </TouchableOpacity>
  );
};

const handleButtonPress = () => {
    console.log('Botão clicado');
  };

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
