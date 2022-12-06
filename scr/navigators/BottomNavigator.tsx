import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Routes } from "./Routes";
import Home from "../container/HomeScreen/Home";
import Search from "../container/SearchScreen/search";
import Ticket from "../container/TicketScreen/ticket";
import Profile from "../container/ProfileScreen/profile";
import { StatusBar } from "native-base";
import Ionic from 'react-native-vector-icons/Ionicons'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomNavigator = createBottomTabNavigator();

export const BottomNavigatorScreen = () => (
  <BottomNavigator.Navigator>
    <BottomNavigator.Screen
      name={Routes.HOME_SCREEN}
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="home-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <BottomNavigator.Screen
      name={Routes.SEARCH_SCREEN}
      component={Search}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionic   
            color={color}
            size={size} 
            name="search">
          </Ionic>
        ), 
      }}
    />
    <BottomNavigator.Screen
      name={Routes.TICKET_SCREEN}
      component={Ticket}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="ticket-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
        <BottomNavigator.Screen
      name={Routes.PROFİLE_SCREEN}
      component={Profile}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionic   
            color={color}
            size={size} 
            name="md-person">
          </Ionic>
        ),
      }}
    />
  </BottomNavigator.Navigator>
);


