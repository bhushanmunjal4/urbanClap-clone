import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ServicesSection = ({ title, data }) => {
  const navigation = useNavigation();

  const handleViewAll = () => {
    navigation.navigate("SelectedService");
  };

  const handleSelectService = () => {
    navigation.navigate("SelectedService");
  };
  const renderServiceItem = ({ item }) => (
    <TouchableOpacity style={styles.serviceItem} onPress={handleSelectService}>
      <ImageBackground source={item.image} style={styles.serviceImage}>
        <View style={styles.overlay}>
          <Text style={styles.serviceName}>{item.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.sectionTitle}>{title}</Text>
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
      <FlatList
        data={data}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={200} // Adjust this value as needed
        decelerationRate="fast" // Adjust scroll speed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
    marginLeft: 10,
  },
  serviceItem: {
    marginRight: 10,
  },
  serviceImage: {
    width: 200,
    height: 150,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 10,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  serviceName: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 15,
    marginBottom: 10,
  },
});

export default ServicesSection;
