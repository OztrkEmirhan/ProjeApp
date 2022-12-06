import React from "react";
import { View , TouchableOpacity} from "react-native";
import {NativeBaseProvider, ScrollView, Image, Text, Radio, Box, Actionsheet, Input, Center, Heading, VStack, FormControl, Link, Button, HStack, Card, useDisclose,  } from "native-base";
import Ionic from 'react-native-vector-icons/Ionicons'

const Logo = (props: any) => (
    <NativeBaseProvider>
        <Center flexDirection="row" bg="#FFFFFF" height={70} borderRadius={10} marginLeft={5} alignItems="center" margin={0} shadow={10}>
            <Image resizeMode="contain" width={8} height={8} source={props.image} />   
            <Text fontWeight="medium" fontSize={17} marginLeft={1} > {props.text} </Text>
        </Center>
    </NativeBaseProvider>
);

export default Logo;