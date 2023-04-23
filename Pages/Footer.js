import React from "react";
import { StyleSheet ,Text, View } from "react-native";

function Footer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: 'navy',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Footer;
