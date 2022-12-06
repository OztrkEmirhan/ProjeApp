import React from "react";
import { TouchableOpacity,} from "react-native";
import {NativeBaseProvider, Image, View, Text, Box, Input, Center, Heading, VStack, FormControl, Link, Button, HStack,  } from "native-base";

const CollectionCard = (props: any) => (
    <NativeBaseProvider>
        <Center flex={1} bg="#FFFFFF" justifyContent="flex-start" alignItems="flex-start" >
            <Center marginLeft={3} >
            <TouchableOpacity>
                <Image source={props.image} borderRadius={15} width="300" height="150"  />
            </TouchableOpacity>
                <Text color="#FFFFFF" fontSize={"xl"} fontWeight={500} position="absolute" top={5} left={5}  >{props.title}</Text>
                <Text color="#FFFFFF" fontSize={"sm"} position="absolute" top={12} left={5} >{props.suptitle}</Text>
                <Text color="#FFFFFF" position="absolute" top={20} left={40} > {props.indierock} </Text> 
            </Center>
        </Center>
    </NativeBaseProvider>
);

export default CollectionCard;

