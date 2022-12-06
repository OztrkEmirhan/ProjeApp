import React, { useState } from "react";
import { useNavigation } from '@react-navigation/core'
import { initializeApp } from "firebase/app";
import { TouchableOpacity } from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeBaseProvider, Text, Box, Center, Heading, VStack, FormControl, Input, Button, HStack, ScrollView  } from "native-base";
import { Routes } from "../../navigators/Routes";
import Ionic from 'react-native-vector-icons/Ionicons'

initializeApp({
  apiKey: "AIzaSyCIYRAdDp7MTwIqYF08QYiclle7A_J9lho",
  authDomain: "unison-366617.firebaseapp.com",
  projectId: "secure-unison-366617",
  storageBucket: "secure-unison-366617.appspot.com",
  messagingSenderId: "999018163426",
  appId: "1:999018163426:web:03d3db64d53a50c73342bb"
});

const auth = getAuth();

export default function Register() {
  const inset = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<any>({
    email:'',
    password: "",
    passwordAgain: "",
    name: "",
  });
  const navigation = useNavigation<any>();
  
    function goBack() {
      // We need to use the screen props `{navigation}` to navigate back
      // it will be introduced in the next lesson `react-navigation`
     navigation.goBack();
  }
  return (
    <NativeBaseProvider>
      <ScrollView>
      <Box safeAreaTop bg="coolGray.100" />
      <Center w="100%"> 
      <HStack bg="coolGray.100" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
        <TouchableOpacity onPress={goBack} >
           <Ionic name="arrow-back-outline" size={30} color='#A6AAB1' ></Ionic> 
           </TouchableOpacity>
          <Center alignItems="center" px="10">
            <Text>
            Sing Up
            </Text>
          </Center>
        </HStack>
      </HStack>
      <Box safeArea p="2" w="90%" maxW="290" py="1">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
        Ticket Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
            keyboardType="email-address"
            autoCapitalize="none"
            textContentType="emailAddress"
            placeholder="E-Mail"
            value={form.email}
            onChangeText={(t) => setForm({ ...form, email: t })} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input 
            placeholder="Password"
            value={form.password}
            onChangeText={(t) => setForm({ ...form, password: t })}
            type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input 
            placeholder="Password Again"
            value={form.passwordAgain}
            onChangeText={(t) => setForm({ ...form, passwordAgain: t })}
            type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input 
            placeholder="Name"
            value={form.name}
            onChangeText={(t) => setForm({ ...form, name: t })} />
          </FormControl>
          <Button loading={loading}
          onPress={() => {
            if (
              form.email === "" ||
              form.password === "" ||
              form.name === "" ||
              form.passwordAgain === ""
            ) {
              alert("Please fill all fields!");
              return;
            }

            if (form.password !== form.passwordAgain) {
              alert("Passwords do not match!");
              return;
            }

            setLoading(true);
          //   setTimeout(() => {
          //     navigation.navigate(Routes.BOTTOM_NAVIGATOR);
          //   }, 3000);
            createUserWithEmailAndPassword(
              auth,
              form.email,
              form.password
            ).then((res) => {
              updateProfile(res.user, {
                displayName: form.name,
              }).then(() => {
                navigation.navigate(Routes.LOGIN_SCREEN);
              });
            });
          }} mt="2" colorScheme="indigo">
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
    </ScrollView>
    </NativeBaseProvider>
  );
}