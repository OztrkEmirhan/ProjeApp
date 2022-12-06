import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useState } from "react";
import { Ticketbuy } from "../component/Ticketbuy/TicketBuy";
import DetailScreen from "../container/DetailScreen/Detail";
import { Warsaw } from "../container/Warsaw/Warsaw";
import { AuthNavigatorScreen } from "./AuthNavigator";
import { BottomNavigatorScreen } from "./BottomNavigator";
import { Routes } from "./Routes";

const MainNavigator = createNativeStackNavigator();

export const MainNavigatorScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={
          isSignedIn ? Routes.BOTTOM_NAVIGATOR : Routes.AUTH_SCREEN
        }
      >
        <MainNavigator.Screen
          name={Routes.AUTH_SCREEN}
          component={AuthNavigatorScreen}
      />
        <MainNavigator.Screen
          name={Routes.BOTTOM_NAVIGATOR}
          component={BottomNavigatorScreen}
        />
        <MainNavigator.Screen
        name={Routes.WARSAW_SCREEN}
        component={Warsaw}
        />
        <MainNavigator.Screen
        name={Routes.TICKETBUY}
        component={Ticketbuy}
        />
        <MainNavigator.Screen
        name={Routes.DETAİL_SCREEN}
        component={DetailScreen}
        />

      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};
