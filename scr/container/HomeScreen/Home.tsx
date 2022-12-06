import React from "react";
import { useNavigation } from '@react-navigation/core'
import { View , TouchableOpacity} from "react-native";
import {NativeBaseProvider, ScrollView, Image, Text, Radio, Box, Actionsheet, Input, Center, Heading, VStack, FormControl, Link, Button, HStack, Card, useDisclose,  } from "native-base";
import ForyouCard from "../../component/Card/Card";
import Ionic from 'react-native-vector-icons/Ionicons'
import Logo from "../../component/Logo/İndex";
import CollectionCard from "../../component/CollectionCard/Collection";
import { Routes } from "../../navigators/Routes";

export default function Home () {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  const navigation = useNavigation<any>()
    return(
      <NativeBaseProvider>
      <ScrollView
      showsVerticalScrollIndicator={false}
      flex={1} 
      bg="#FFFFFF">

        {/*For You*/}

      <Center justifyContent="space-between" flexDirection="row" padding={3}>
        <Text color="#373A42" fontWeight={600} fontSize={20} marginLeft={5} >For you</Text> 
      <TouchableOpacity onPress={onOpen}>
      <Center>
        <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
          <Actionsheet.Content>
            <Box w="100%" h={60} px={4} justifyContent="center">
              <Text fontSize="16" color="gray.500" _dark={{
              color: "gray.300"
            }}>
              Filter
              </Text>
            </Box>
            <Actionsheet.Item startIcon={<Ionic name="trash-outline" size={25} color='#FC1055' ></Ionic>}>
              Delete
            </Actionsheet.Item>
            <Actionsheet.Item startIcon={<Ionic name="exit-outline" size={25} color='#FC1055' ></Ionic>}>
              Exit
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </Center>
        <Ionic name="reorder-four-outline" size={25} color='#FC1055' ></Ionic>
      </TouchableOpacity>
      </Center>

      <Center justifyContent="flex-start" alignItems="flex-start">
      <ScrollView   
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
      <ForyouCard 
        image={{ uri: "https://i.hizliresim.com/dd0gado.png"}}
        title="FRIDAY AUG 24, 9PM" 
        suptitle="Brightlight Music Festival"
        indierock="Indie Rock            €40 - €90"
      />
      <ForyouCard 
        title="FRIDAY AUG 24, 9PM" 
        suptitle="Brightlight Music Festival"
        indierock="Indie Rock            €40 - €90"
        image={{ uri: "https://i.hizliresim.com/ap2d5fu.png"}}
      />
      </ScrollView>
      </Center>

      {/*For You*/}

      {/*Collection*/}

      <Center justifyContent="flex-start" alignItems="flex-start">
      <Text color="#373A42" fontWeight={600} padding={3} fontSize={20} marginLeft={5} >Collection</Text> 
      <ScrollView   
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.DETAİL_SCREEN)}>
      <CollectionCard 
        title="Electronica Next Month" 
        suptitle="Indie Rock"
        indierock="Learn More"
        image={{ uri: "https://i.hizliresim.com/4nf8pac.png"}}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.DETAİL_SCREEN)}>
      <CollectionCard 
        title="Electronica Next Month" 
        suptitle="Indie Rock"
        indierock="Learn More"
        image={{ uri: "https://i.hizliresim.com/swt6bh1.png"}}
      />
      </TouchableOpacity>
      </ScrollView>
      </Center>

      {/*Collection*/}

      {/* Home Categories */}

    <Center justifyContent="flex-start" alignItems="flex-start" >
     <Text color="#373A42" fontWeight={600}  fontSize={20} paddingTop={3}  marginLeft={8} >Discover </Text> 
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        flexDirection="row"
        horizontal={true}>
      <TouchableOpacity>
      <Logo
      text="Your Arena"
      image={{ uri: "https://i.hizliresim.com/2zfej06.png"}}     
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <Logo
      text="Music"
      image={{ uri: "https://i.hizliresim.com/eee2489.png"}}     
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <Logo
      text="Sports"
      image={{ uri: "https://i.hizliresim.com/2tuoc8e.png"}}     
      />
      </TouchableOpacity>
      </ScrollView>
    </Center>

    {/* Home Categories */}

    {/* Upcoming */}        
    <Center>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.WARSAW_SCREEN)}>
      <Ionic style={{top:45 , left:130}} name="md-arrow-forward" size={25} color='#FC1055' ></Ionic>
      </TouchableOpacity>
    <Center marginLeft={10} justifyContent="flex-start" alignItems="flex-start">
      <Text color="#C1C6C6" fontSize={15} >Warsaw</Text>
      <Text color="#373A42" fontWeight={600} right={2} bottom={2} fontSize={20} >Upcoming</Text> 
      <Image width={25} height={550} left={-25} top={75} position={"absolute"} source={{uri: "https://i.hizliresim.com/pslb3om.png"}}/> 
      <ScrollView  
        marginTop={5}
        showsVerticalScrollIndicator={false}>
        <ForyouCard 
        title="FRIDAY AUG 24, 9PM" 
        suptitle="Brightlight Music Festival"
        indierock="Indie Rock            €40 - €90"
        image={{ uri: "https://i.hizliresim.com/dd0gado.png"}}
      />
      <Center top={2}>
      <ForyouCard 
      title="FRIDAY AUG 24, 9PM" 
      suptitle="Brightlight Music Festival"
      indierock="Indie Rock            €40 - €90"
      image={{ uri: "https://i.hizliresim.com/ap2d5fu.png"}}
    />
      </Center>
      </ScrollView>
      </Center>
      </Center>

      {/* Upcoming */}   

        </ScrollView>
      </NativeBaseProvider>
      );
};
