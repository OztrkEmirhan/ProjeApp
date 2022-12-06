import React from "react";
import { TouchableOpacity,} from "react-native";
import {NativeBaseProvider, Image, View, Text, Box, Input, Center, Heading, VStack, FormControl, Link, Button, HStack,  } from "native-base";
import Ionic from 'react-native-vector-icons/Ionicons'

const ForyouCard = (props: any) => (
    <NativeBaseProvider>
        <Center flex={1} bg="#FFFFFF" justifyContent="flex-start" >
            <Center marginLeft={3} >
            <TouchableOpacity> 
                <Image source={props.image} borderRadius={15} width="300px" height="220px"  />
            </TouchableOpacity>
            <Center justifyContent="flex-end">
                <Text color="#FFFFFF"  position="absolute" bottom={20}>{props.title}</Text>
                <Text color="#FFFFFF" fontSize={"xl"} fontWeight={500} position="absolute" bottom={45}>{props.suptitle}</Text>
                <Text color="#FFFFFF" fontSize={"sm"}  position="absolute" bottom={4}>{props.indierock}</Text>
            </Center>
            </Center>
        </Center>
    </NativeBaseProvider>
);

export default ForyouCard;
