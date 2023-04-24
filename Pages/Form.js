import React from "react";
import  { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Header from './Header';
import Footer from './Footer';

function Form(){
  const navigation = useNavigation();

  return(
    <>
      <Header title="Cadastro" />
      <View style={styles.container}>
        <Text>Teremos um formulário aqui</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack('Home') }>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Footer title="React Native" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#DDDDDD"
  },
  button: {
    alignItems: 'center',
    backgroundColor: "white",
    padding: 10
  }
});

export default Form;