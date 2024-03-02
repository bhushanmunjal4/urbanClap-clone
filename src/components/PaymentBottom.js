import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const PaymentBottom = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0048B1", "#2a8dfa"]}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.bottomSheet}
      >
        <View style={{ marginTop: 30 }}>
          <View style={styles.totalContainer}>
            <Text style={styles.title}>Subtotal</Text>
            <Text style={styles.price}>₹ 268.00</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.title}>Discount %</Text>
            <Text style={styles.price}>15 %</Text>
          </View>
        </View>
        <View
          style={{ borderWidth: 0.3, borderColor: "#cccccc", marginTop: 30 }}
        ></View>
        <View style={styles.totalContainer}>
          <Text style={styles.title}>Total</Text>
          <Text style={styles.price}>₹ 268.00</Text>
        </View>
        <TouchableOpacity style={styles.btnContainer}>
          <Text
            style={{
              color: "#1B79DF",
              fontSize: 18,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
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
    flexDirection: "column",
    paddingHorizontal: 30,
    width: "100%",
    height: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  totalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  btnContainer: {
    backgroundColor: "#fff",
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 40,
    marginHorizontal: 30,
    marginTop: 50,
  },
});

export default PaymentBottom;
