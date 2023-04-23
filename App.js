import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  const [contador, setContador] = useState(0);
  function incrementar(){
    setContador(contador+1);
  }

  return (
    <>
      <Header title="Header Param" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello  World!</Text>
        <Text>{contador} toques!</Text>
        <TouchableOpacity style={styles.button} onPress={incrementar}>
          <Text>Press Here</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
      <Footer title="Footer Param" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474A51',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
