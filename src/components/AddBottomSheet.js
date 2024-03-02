import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const AddBottomSheet = ({ services, totalPrice, onContinue }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0048B1", "#2a8dfa"]}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.bottomSheet}
      >
        <View>
          <Text style={{ color: "#fff", fontSize: 18, marginBottom: 8 }}>
            Total
          </Text>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>
            ₹ {totalPrice.toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity style={styles.btnContainer} onPress={onContinue}>
          <Text style={{ color: "#1B79DF", fontSize: 18, fontWeight: 600 }}>
            Continue
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    zIndex: 1,
  },
  bottomSheet: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    width: "100%",
    height: 110,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  btnContainer: {
    backgroundColor: "#fff",
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
});

export default AddBottomSheet;
