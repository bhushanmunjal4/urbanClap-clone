import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.location}>
        <View style={styles.leftContent}>
          <Entypo name="location-pin" size={24} color="#00008B" />
          <View style={{ marginLeft: 5 }}>
            <Text style={{ fontSize: 15 }}>Current Location</Text>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              Sector 61, Mohali
            </Text>
          </View>
        </View>
        <FontAwesome name="bell-o" size={20} color="#858585" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 30,
    // marginHorizontal: 30,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Header;
