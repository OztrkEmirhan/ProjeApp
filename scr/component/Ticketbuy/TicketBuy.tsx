import React from "react";
import { useNavigation } from '@react-navigation/core'
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { Routes } from "../../navigators/Routes";
import { Box, StatusBar, HStack, IconButton, Icon, Center, InputLeftAddon } from "native-base";
import Ionic from 'react-native-vector-icons/Ionicons'
import AnimatedMapRegion from "react-native-maps/lib/AnimatedRegion";

export const Ticketbuy = () => {
    const navigation = useNavigation<any>();
  
    function goBack() {
      // We need to use the screen props `{navigation}` to navigate back
      // it will be introduced in the next lesson `react-navigation`
     navigation.goBack();
    }
  
    return (
        <View style={{flex:1, backgroundColor:"#FFF"}}> 
            <Center margin={20}>
                <Image style={{width:320, height:250}} source={{uri: "https://i.hizliresim.com/qv6qky5.png"}}/>
            </Center>

            <Center bottom={10} justifyContent="space-between" flexDirection="row" >
                <Text style={{color:"#373A42", left:20, fontSize:20, fontWeight:"500"}}>Tickets</Text>
                <Text style={{color:"#FC1055", left:60, fontSize:15, fontWeight:"600"}} >BY PRICE</Text>
                <TouchableOpacity>
                    <Ionic style={{right:30}} name="swap-vertical-outline" size={23} color='#FC1055' ></Ionic>
                </TouchableOpacity>
            </Center>

            <Center bg="#FFF" width={400} justifyContent="space-between" flexDirection="row" borderRadius={20}>
                <Image style={{width:30 , height:30, left:10, top:-18}} source={{ uri: "https://i.hizliresim.com/c4l5djr.png"}} />
            <Center marginRight={32} alignItems="flex-start" >
                <Text style={{color:"#373A42", fontSize:15, fontWeight:"500", right:100}} >
                    Section P, Row 3
                </Text>
                <Text style={{color:"#BDC0C4", right:100}}  >
                    12 Seats available
                </Text>
                <Text style={{color:"#373A42", top:-37, left:120, fontWeight:"700"  }} >
                    $30
                </Text>
                <Text style={{color:"#BDC0C4", top:-37, left:100   }} >
                    per person
                </Text>
            </Center>
            </Center>

            <Center bg="#FFF" width={400} justifyContent="space-between" flexDirection="row" borderRadius={20}>
                <Image style={{width:30 , height:30, left:10, top:-18}} source={{ uri: "https://i.hizliresim.com/71rzh6h.png"}} />
            <Center marginRight={32} alignItems="flex-start" >
                <Text style={{color:"#373A42", fontSize:15, fontWeight:"500", right:100}} >
                    Section P, Row 3
                </Text>
                <Text style={{color:"#BDC0C4", right:100}}  >
                    12 Seats available
                </Text>
                <Text style={{color:"#373A42", top:-37, left:120, fontWeight:"700"  }} >
                    $30
                </Text>
                <Text style={{color:"#BDC0C4", top:-37, left:100   }} >
                    per person
                </Text>
            </Center>
            </Center>

            <Center bg="#FFF" width={400} justifyContent="space-between" flexDirection="row" borderRadius={20}>
                <Image style={{width:30 , height:30, left:10, top:-18}} source={{ uri: "https://i.hizliresim.com/1lnuckv.png"}} />
            <Center marginRight={32} alignItems="flex-start" >
                <Text style={{color:"#373A42", fontSize:15, fontWeight:"500", right:100}} >
                    Section P, Row 3
                </Text>
                <Text style={{color:"#BDC0C4", right:100}}  >
                    12 Seats available
                </Text>
                <Text style={{color:"#373A42", top:-37, left:120, fontWeight:"700"  }} >
                    $30
                </Text>
                <Text style={{color:"#BDC0C4", top:-37, left:100   }} >
                    per person
                </Text>
            </Center>
            </Center>


        </View>

    )
};