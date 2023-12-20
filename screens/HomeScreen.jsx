import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import useCustomFonts from "../hooks/useCustomFonts";

const HomeScreen = ({ navigation }) => {
  let fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wohooo, we finally got here 🎉</Text>
      <Button title="Logout" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "WorkSans_300Light",
    fontSize: 20,
  },
});
