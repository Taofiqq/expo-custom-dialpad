import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import useCustomFonts from "../hooks/useCustomFonts";

const Login = ({ navigation }) => {
  let fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login to Proceed</Text>
      <Button title="Login" onPress={() => navigation.navigate("Dialpad")} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontFamily: "WorkSans_300Light",
    fontSize: 20,
  },
});
