import React from "react";
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

const BookingsScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="chevron-back" size={30} color="#103060" />
          </TouchableOpacity>
          <Text style={styles.title}>Bookings</Text>
          <View style={styles.rightHeader} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  BookingsScreenContainer: {
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

export default BookingsScreen;
