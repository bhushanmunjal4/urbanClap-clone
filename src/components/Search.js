import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRef } from "react";

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.textInputBox}>
        <AntDesign name="search1" size={24} color="#858585" />
        <TextInput
          placeholder="Search for services"
          placeholderTextColor="#858585"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 20,
  },
  textInputBox: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    borderWidth: 1,
    borderColor: "#858585",
    borderRadius: 10,
    padding: 12,
  },
});

export default Search;
