import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const PaymentCard = ({ checked, source, card, cardDetail, setChecked }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 20,
          paddingHorizontal: 20,
          borderRadius: 20,
          borderWidth: 0.8,
          borderColor: "#dedede",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={source}
            style={{ width: 50, height: 20, objectFit: "contain" }}
          />
          <View style={{ gap: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>{card}</Text>
            <Text style={{ color: "#787878" }}>{cardDetail}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.radioContainer}
          onPress={() => setChecked((prev) => !prev)}
        >
          <View style={styles.radioButton}>
            {checked ? (
              <Ionicons name="radio-button-on" size={24} color="black" />
            ) : (
              <Ionicons name="radio-button-off" size={24} color="black" />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    marginRight: 10,
  },
});

export default PaymentCard;
