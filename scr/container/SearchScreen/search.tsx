import React from "react";
import { useNavigation } from '@react-navigation/core'
import {NativeBaseProvider, Text, Box, Input, Center, Heading, VStack, FormControl, Link, Button, HStack } from "native-base";
import { Routes } from "../../navigators/Routes";
import MapView from "react-native-maps";
import Maps from "../../component/Maps/Maps";

export default function Search () {
  const navigation = useNavigation<any>()
  return(
      <Maps />
    )
};