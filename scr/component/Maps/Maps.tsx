import React from "react";
import { useNavigation } from '@react-navigation/core'
import {NativeBaseProvider, Text, Box, Input, Center, Heading, VStack, FormControl, Link, Button, HStack } from "native-base";
import { Routes } from "../../navigators/Routes";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

export default function Maps () {
  const navigation = useNavigation<any>()
  return(
    <NativeBaseProvider>
    <MapView
    style={{flex:1}}
    initialRegion={{
      latitude: 37.87786,
      longitude:-122.4324,
      latitudeDelta:0.0922,
      longitudeDelta:0.421,
    }} >
      <Marker
      coordinate={{
      latitude: 37.87786,
      longitude:-122.4324,
      }}
      >
      </Marker>


    </MapView>
     
    </NativeBaseProvider>
    )
};