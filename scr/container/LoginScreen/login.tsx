import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import {NativeBaseProvider, Box, Input, Center, Heading, VStack, FormControl, Link, Button, HStack, ScrollView } from "native-base";
import { Routes } from "../../navigators/Routes";

initializeApp({
  apiKey: "AIzaSyCIYRAdDp7MTwIqYF08QYiclle7A_J9lho",
  authDomain: "unison-366617.firebaseapp.com",
  projectId: "secure-unison-366617",
  storageBucket: "secure-unison-366617.appspot.com",
  messagingSenderId: "999018163426",
  appId: "1:999018163426:web:03d3db64d53a50c73342bb"
});

const auth = getAuth();

export default function Login () {

  const inset = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  
  const navigation = useNavigation<any>()
  return(
    <NativeBaseProvider>
      <ScrollView>
     <Center w="100%">
      <Box safeArea p="2" py="20" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
        Ticket Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
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
            type="password"
            placeholder="Password"
            value={form.password}
            onChangeText={(t) => setForm({ ...form, password: t })} />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button
           onPress={() => {
            if (form.email === "" || form.password === "") {
              alert("Please fill all fields!");
              return;
            }
            setLoading(true);
          //   setTimeout(() => {
          //     navigation.navigate(Routes.BOTTOM_NAVIGATOR);
          //   }, 3000);

            signInWithEmailAndPassword(auth, form.email, form.password)
              .then((res) => {
                navigation.navigate(Routes.BOTTOM_NAVIGATOR);
              })
              .catch((err) => {
                alert(err.message);
              })
              .finally(() => {
                setLoading(false);
              });
          }} mt="2" colorScheme="indigo">
            Sign in
          </Button>
          <Button onPress={() => navigation.navigate(Routes.REGISTER_SCREEN)} mt="2" colorScheme="indigo">
            Register
          </Button>
          <HStack mt="6" justifyContent="center">
            <Link onPress={() => navigation.navigate(Routes.TERMS_SCREEN)} _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "20"
          }}>
              Terms & Conditions
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
    </ScrollView>
    </NativeBaseProvider>
    )
};