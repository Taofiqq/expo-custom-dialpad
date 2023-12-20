import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useCustomFonts from "../hooks/useCustomFonts";
import DialpadPin from "../components/DialpadPin";
import DialpadKeypad from "../components/DialpadKeypad";

const { width, height } = Dimensions.get("window");

const dialPadContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "X"];

const dialPadSize = width * 0.2;
const dialPadTextSize = dialPadSize * 0.4;

const pinLength = 4;
const pinContainerSize = width / 2;
const pinSize = pinContainerSize / pinLength;
const CustomDialPad = () => {
  const fontsLoaded = useCustomFonts();
  const navigation = useNavigation();
  const [code, setCode] = useState([]);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: -5, left: 10 }}
        >
          <Ionicons name="ios-chevron-back" size={45} color="#5E454B" />
        </TouchableOpacity>
        <Text style={styles.pinText}>Create PIN</Text>
        <Text style={styles.pinSubText}>Enter your secure four-digit code</Text>
        <DialpadPin
          pinLength={pinLength}
          pinSize={pinSize}
          code={code}
          dialPadContent={dialPadContent}
        />

        <DialpadKeypad
          dialPadContent={dialPadContent}
          pinLength={pinLength}
          setCode={setCode}
          code={code}
          dialPadSize={dialPadSize}
          dialPadTextSize={dialPadTextSize}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomDialPad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF0E6",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    position: "relative",
  },
  pinText: {
    fontSize: 30,
    fontWeight: "medium",
    color: "#5E454B",
    fontFamily: "WorkSans_300Light",
  },
  pinSubText: {
    fontSize: 18,
    fontWeight: "medium",
    color: "#5E454B",
    fontFamily: "WorkSans_500Medium",
    marginVertical: 30,
  },
  dialPadContainer: {
    width: dialPadSize,
    height: dialPadSize,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 50,
    borderColor: "transparent",
  },
  dialPadText: {
    color: "#3F1D38",
    fontSize: dialPadTextSize,
    fontFamily: "WorkSans_400Regular",
  },
});
