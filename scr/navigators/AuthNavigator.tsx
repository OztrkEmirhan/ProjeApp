import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Terms } from "../container";
import Login from "../container/LoginScreen/login";
import Register from "../container/RegisterScreen/register";
import { Routes } from "./Routes";

const AuthNavigator = createNativeStackNavigator<any>();

export const AuthNavigatorScreen = () => (
  <AuthNavigator.Navigator screenOptions={{ headerShown: false }}>
    <AuthNavigator.Screen name={Routes.LOGIN_SCREEN} component={Login} />
    <AuthNavigator.Screen
      name={Routes.REGISTER_SCREEN}
      component={Register}
    />
    <AuthNavigator.Screen name={Routes.TERMS_SCREEN} component={Terms} />
  </AuthNavigator.Navigator>
);
