import React from "react";
import { useNavigation } from '@react-navigation/core'
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Routes } from "../../navigators/Routes";
import { Box, StatusBar, HStack, IconButton, Icon, Center, Text, } from "native-base";
import Ionic from 'react-native-vector-icons/Ionicons'
import AnimatedMapRegion from "react-native-maps/lib/AnimatedRegion";

export const Warsaw = () => {
    const navigation = useNavigation<any>();
  
    function goBack() {
      // We need to use the screen props `{navigation}` to navigate back
      // it will be introduced in the next lesson `react-navigation`
     navigation.goBack();
    }
  
    return (
      <View style={{backgroundColor:"#FFF", height:"100%"}}>

      <Center justifyContent="space-between" marginTop={12} flexDirection="row">
        <Text left={5} color="#373A42" fontSize={25}>Warsaw</Text>
        <TouchableOpacity>
        <Ionic style={{right:30}} name="md-calendar" size={20} color='#FC1055' ></Ionic>
        </TouchableOpacity>
      </Center>
      
      <Text color="#FC1055" top={10} left={4} fontWeight={500}>SEPTEMBER</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate(Routes.TICKETBUY)} >
      <Center marginTop={12} bg="#FFF" width={400} justifyContent="space-between" padding={3} flexDirection="row" borderRadius={20}>
        <Image style={{width:35 , height:50, left:10, borderRadius:20}} source={{ uri: "https://i.hizliresim.com/arwvn7f.png"}} />
        <Center marginRight={32} alignItems="flex-start">
          <Text color="#373A42" fontSize={18}  fontWeight={500} >
          Trying New Material
          </Text>
          <Text color="#BDC0C4" >
          Capitol Theater,Warsaw
          </Text>
          <Text color="#BDC0C4">
          19:00-20:45 
          </Text>
        </Center>
      </Center>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate(Routes.TICKETBUY)}>
      <Center marginTop={5} bg="#FFF" width={400} justifyContent="space-between" flexDirection="row" padding={3} borderRadius={20}>
        <Image style={{width:35 , height:50, left:10, borderRadius:20}} source={{ uri: "https://i.hizliresim.com/qxbwkkk.png"}} />
        <Center marginRight={32} alignItems="flex-start">
          <Text color="#373A42" fontSize={18}  fontWeight={500} >
          Trying New Material
          </Text>
          <Text color="#BDC0C4" >
          Capitol Theater,Warsaw
          </Text>
          <Text color="#BDC0C4">
          19:00-20:45 
          </Text>
        </Center>
      </Center>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate(Routes.TICKETBUY)}>
      <Center marginTop={5} bg="#FFF" width={400} justifyContent="space-between" flexDirection="row" padding={3} borderRadius={20}>
        <Image style={{width:35 , height:50, left:10, borderRadius:20}} source={{ uri: "https://i.hizliresim.com/1dy685d.png"}} />
        <Center marginRight={32} alignItems="flex-start">
          <Text color="#373A42" fontSize={18}  fontWeight={500} >
          Trying New Material
          </Text>
          <Text color="#BDC0C4" >
          Capitol Theater,Warsaw
          </Text>
          <Text color="#BDC0C4">
          19:00-20:45 
          </Text>
        </Center>
      </Center>
      </TouchableOpacity>

      </View>
    )
};