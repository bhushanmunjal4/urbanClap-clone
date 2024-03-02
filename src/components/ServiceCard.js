import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import AddBottomSheet from "./AddBottomSheet";

const image = require("../../assets/services/salon2.jpg");

const ServiceCard = ({
  name,
  price,
  selectedServices,
  updateSelectedServices,
}) => {
  const isServiceAdded = selectedServices.some(
    (selectedService) => selectedService.name === name
  );

  const handleAddToCart = () => {
    const updatedServices = isServiceAdded
      ? selectedServices.filter((service) => service.name !== name)
      : [...selectedServices, { name, price }];
    updateSelectedServices(updatedServices);
  };

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image
          source={image}
          style={{
            width: 70,
            height: 80,
            borderRadius: 20,
          }}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            {name}
          </Text>
          <Text style={{ fontSize: 12, color: "#00991c" }}>SAVE UP TO 28%</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 10,
              gap: 5,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 700 }}>₹{price}</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "red",
                textDecorationLine: "line-through",
              }}
            >
              ₹400
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={handleAddToCart}>
          <Text
            style={{ alignItems: "center", fontWeight: 600, color: "#0048ff" }}
          >
            {isServiceAdded ? "Added" : "ADD"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondColumn}>
        <Text>
          {name} - Men's {name}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              textDecorationLine: "underline",
              fontWeight: 600,
              color: "#6b6b6b",
            }}
          >
            View Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: "#dedede",
    marginHorizontal: 20,
    backgroundColor: "white",
  },
  secondColumn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 20,
    borderBottomColor: "#bfbfbf",
  },

  addBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d1d1d1",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default ServiceCard;
