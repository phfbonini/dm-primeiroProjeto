import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

const RepositoryList = () => {
  const [beers, setBeers] = useState([]);

  const repositoryBeers = async () => {
    try {
      const response = await axios.get('https://random-data-api.com/api/v2/beers?size=10');
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    repositoryBeers();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {beers.map((beer) => (
        <View style={styles.beerContainer} key={beer.id}>
          <Text style={styles.name}>Nome: {beer.name}</Text>
          <Text style={styles.brand}>Marca{beer.brand}</Text>
          <Text style={styles.style}>Estilo{beer.style}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  beerContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  brand: {
    fontSize: 14,
    color: '#555',
  },
  style: {
    fontSize: 14,
    color: '#555',
  },
});

export default RepositoryList;