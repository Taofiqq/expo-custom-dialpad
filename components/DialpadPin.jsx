import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DialpadPin = ({ pinLength, pinSize, code, dialPadContent }) => {
  return (
    <View style={styles.dialPadPinContainer}>
      {Array(pinLength)
        .fill()
        .map((_, index) => {
          const item = dialPadContent[index];
          const isSelected =
            typeof item === "number" && code[index] !== undefined;
          return (
            <View
              key={index}
              style={{
                width: pinSize,
                height: pinSize,
                borderRadius: pinSize / 2,
                overflow: "hidden",
                margin: 5,
              }}
            >
              <View
                style={[
                  {
                    borderRadius: pinSize / 2,
                    borderColor: !isSelected ? "lightgrey" : "#3F1D38",
                  },
                  styles.pinContentContainer,
                ]}
              >
                {isSelected && (
                  <View
                    style={[
                      {
                        width: pinSize * 0.5,
                        height: pinSize * 0.5,
                        borderRadius: pinSize * 0.35,
                      },
                      styles.pinContent,
                    ]}
                  />
                )}
              </View>
            </View>
          );
        })}
    </View>
  );
};

export default DialpadPin;

const styles = StyleSheet.create({
  dialPadPinContainer: {
    flexDirection: "row",
    marginBottom: 30,
    alignItems: "flex-end",
  },
  pinContentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pinContent: {
    backgroundColor: "#5E454B",
  },
});
