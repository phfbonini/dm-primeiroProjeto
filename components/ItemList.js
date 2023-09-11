import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemList = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
  name: {
    fontWeight: 'bold',
  },
  description: {
    fontStyle: 'italic',
  },
});

export default ItemList;