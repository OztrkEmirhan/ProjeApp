import React from "react";
import { useNavigation } from '@react-navigation/core'
import { View, Image , Dimensions } from "react-native";
import {NativeBaseProvider, Text, Box, Input, Center, Heading, VStack, FormControl, Link, Button, HStack, ScrollView } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import TicketCategories from "../../component/TicketCategories";

export default function Ticket () {
  const navigation = useNavigation<any>()
    return(
      <NativeBaseProvider>
        <Center flex={1} bg="#FFFFFF" justifyContent="flex-start" alignItems="flex-start">
          <Image style={{ 
            width : Dimensions.get('window').width ,
            height : Dimensions.get('window').height / 1.3, }} source={require('../../../assets/image/Tickets.png')} />
            <Text position="absolute" color="#FFFFFF" fontWeight={700} fontSize={30} marginTop={20} marginLeft={5} >Popular</Text>
            <TicketCategories />
        </Center>
        <Center justifyContent="flex-end" >
          <Text position='absolute' color="#373A42" fontWeight={700} bottom={20} fontSize={20}  >No tickets bought</Text>
          <Text position='absolute' color="#B3B8B8" textAlign='center' bottom={5} fontWeight={700} fontSize={15} >It appears you haven’t bought any tickets yet. Maybe try searching these?</Text>
        </Center>
      </NativeBaseProvider>
      );
};