import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const icons = [
  {
    name: "painter",
    image: require("../../assets/icons/painter.png"),
  },
  {
    name: "carpenter",
    image: require("../../assets/icons/carpenter.png"),
  },
  {
    name: "driver",
    image: require("../../assets/icons/driver.png"),
  },
  {
    name: "electrician",
    image: require("../../assets/icons/electrician.png"),
  },
  {
    name: "haircut",
    image: require("../../assets/icons/haircut.png"),
  },
  {
    name: "maid",
    image: require("../../assets/icons/maid.png"),
  },
  {
    name: "mechanic",
    image: require("../../assets/icons/mechanic.png"),
  },
  {
    name: "milkman",
    image: require("../../assets/icons/milkman.png"),
  },
];

const Category = () => {
  const navigation = useNavigation();
  const handleViewAll = () => {
    navigation.navigate("Services");
  };
  return (
    <View style={styles.categoryContainer}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Choose Services</Text>
        <TouchableOpacity onPress={handleViewAll}>
          <Text
            style={{
              color: "#2bb2ff",
              textDecorationLine: "underline",
              fontSize: 14,
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconsContainer}>
        {icons.map((icon, index) => (
          <TouchableOpacity key={index} style={styles.iconWrapper}>
            <View style={styles.icon}>
              <Image source={icon.image} style={styles.iconImage} />
            </View>
            <Text style={{ marginTop: 10 }}>{icon.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 30,
  },
  iconsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
  },
  iconWrapper: {
    width: "22%",
    alignItems: "center",
    marginBottom: 20,
    marginRight: "3%",
  },
  icon: {
    padding: 15,
    borderRadius: 20,
    borderWidth: 0.2,
    borderColor: "#bfbfbf",
  },
  iconImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});

export default Category;
