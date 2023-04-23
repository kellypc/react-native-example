import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Header title="Header Param" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello  World!</Text>
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
  }
});
