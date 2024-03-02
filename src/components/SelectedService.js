import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ServiceCard from "./ServiceCard";
import AddBottomSheet from "./AddBottomSheet";

const SelectedService = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigation = useNavigation();

  const handleGoBack = () => {
    setSelectedServices([]);
    setTotalPrice(0);
    navigation.goBack();
  };

  const handleTabPress = (index) => {
    setSelectedTab(index);
  };

  const updateSelectedServices = (services) => {
    setSelectedServices(services);
    const newTotalPrice = services.reduce(
      (acc, service) => acc + service.price,
      0
    );
    setTotalPrice(newTotalPrice);
  };

  const handleContinue = () => {
    navigation.navigate("Payment");
  };

  // Define service data
  const services = [
    { name: "Haircut", price: 160 },
    { name: "Hair Color", price: 500 },
    { name: "Clean Shave", price: 100 },
    { name: "Beard Trim", price: 80 },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="chevron-back" size={30} color="#103060" />
          </TouchableOpacity>
          <Text style={styles.title}>Salon for Men</Text>
          <View style={styles.rightHeader} />
        </View>
        <View style={styles.tabsContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabsContentContainer}
          >
            {["Hair Cut", "Hair Color", "Clean Shave", "Bread Trim"].map(
              (tab, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.tab,
                    selectedTab === index && styles.selectedTab,
                  ]}
                  onPress={() => handleTabPress(index)}
                >
                  <Text style={styles.tabText}>{tab}</Text>
                </TouchableOpacity>
              )
            )}
            <View
              style={[
                styles.indicator,
                { transform: [{ translateX: selectedTab * 100 }] },
              ]}
            />
          </ScrollView>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.serviceContainer}
        >
          <ServiceCard
            name={services[selectedTab].name}
            price={services[selectedTab].price}
            updateSelectedServices={updateSelectedServices}
            selectedServices={selectedServices} // Pass selectedServices prop here
          />
          <ServiceCard
            name={services[selectedTab].name}
            price={services[selectedTab].price}
            updateSelectedServices={updateSelectedServices}
            selectedServices={selectedServices} // Pass selectedServices prop here
          />
          <ServiceCard
            name={services[selectedTab].name}
            price={services[selectedTab].price}
            updateSelectedServices={updateSelectedServices}
            selectedServices={selectedServices} // Pass selectedServices prop here
          />
          <ServiceCard
            name={services[selectedTab].name}
            price={services[selectedTab].price}
            updateSelectedServices={updateSelectedServices}
            selectedServices={selectedServices} // Pass selectedServices prop here
          />
        </ScrollView>
      </View>
      {selectedServices.length > 0 && (
        <AddBottomSheet
          services={selectedServices}
          totalPrice={totalPrice}
          onContinue={handleContinue}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  SelectedServiceContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  backButton: {
    paddingRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#103060",
  },
  rightHeader: {
    width: 40,
  },
  tabsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tabsContentContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#2bb2ff",
  },
  indicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "20px",
    height: 2,
    backgroundColor: "#2bb2ff",
    transitionDuration: "0.3s",
  },
  serviceContainer: {
    backgroundColor: "#F7F9FC",
  },
  serviceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  serviceHeaderText: {
    fontSize: 20,
    fontWeight: "600",
  },
  viewAllText: {
    color: "#2bb2ff",
    textDecorationLine: "underline",
    fontSize: 14,
  },
  serviceItem: {
    marginTop: 10,
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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

export default SelectedService;
