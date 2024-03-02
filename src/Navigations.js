import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./pages/HomeScreen";
import BookingsScreen from "./pages/BookingsScreen";
import WishlistScreen from "./pages/WishlistScreen";
import ProfileScreen from "./pages/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Services from "./pages/Services";
import SelectedService from "./components/SelectedService";
import PaymentScreen from "./pages/PaymentScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  const screenOptions = {
    headerShown: false,
    gestureEnabled: true,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      elevation: 0,
      height: 100,
      borderTopLeftRadius: 20, // Adjust the radius to curve the bottom tab bar
      borderTopRightRadius: 20,
    },
    tabBarLabelStyle: {
      marginBottom: 10, // Adjust this value as needed
    },
    tabBarIconStyle: {
      marginBottom: 2, // Adjust this value as needed
    },
  };

  const focusedIconColor = "#2bb2ff"; // Blue color for focused icon
  const defaultIconColor = "black"; // Black color for non-focused icons
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {focused ? (
                <Entypo name="home" size={30} color={focusedIconColor} />
              ) : (
                <MaterialCommunityIcons
                  name="home-outline"
                  size={35}
                  color={defaultIconColor}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Foundation
                name="clipboard-notes"
                size={30}
                color={focused ? focusedIconColor : defaultIconColor}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {focused ? (
                <MaterialIcons
                  name="favorite"
                  size={30}
                  color={focusedIconColor}
                />
              ) : (
                <MaterialIcons
                  name="favorite-border"
                  size={30}
                  color={defaultIconColor}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {focused ? (
                <FontAwesome5
                  name="user-alt"
                  size={30}
                  color={focusedIconColor}
                />
              ) : (
                <FontAwesome5 name="user" size={30} color={defaultIconColor} />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigations = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="SelectedService" component={SelectedService} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
