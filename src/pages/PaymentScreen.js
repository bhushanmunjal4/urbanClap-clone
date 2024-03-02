import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PaymentCard from "../components/PaymentCard";
import PaymentBottom from "../components/PaymentBottom";

const visa = require("../../assets/payment/visa.png");
const bank = require("../../assets/payment/bank.png");
const upi = require("../../assets/payment/upi.png");

const PaymentScreen = () => {
  const [checked, setChecked] = useState(false);
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
          <Text style={styles.title}>Payment</Text>
          <View style={styles.rightHeader} />
        </View>
        <View style={styles.optionContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 600 }}>
              Choose Payment Method
            </Text>
            <Text style={{ fontSize: 14, color: "#005aba", fontWeight: 600 }}>
              + Add New
            </Text>
          </View>
          <View>
            <PaymentCard
              checked={checked}
              source={visa}
              card={"Debit/Credit Card"}
              cardDetail={"VISA:Ending with 1516"}
              setChecked={setChecked}
            />
            <PaymentCard
              checked={checked}
              source={bank}
              card={"Bank Account"}
              cardDetail={"SBI: Ending with 9473"}
              setChecked={setChecked}
            />
            <PaymentCard
              checked={checked}
              source={upi}
              card={"UPI Address"}
              cardDetail={"ID: example2-3@okicici"}
              setChecked={setChecked}
            />
          </View>
        </View>
      </View>
      <PaymentBottom />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
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
  optionContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#F8F9FC",
  },
});

export default PaymentScreen;
