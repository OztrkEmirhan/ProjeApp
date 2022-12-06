import React from "react";
import { NativeBaseProvider, Text, Box,} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigatorScreen } from "./scr/navigators/Navigator";
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyCIYRAdDp7MTwIqYF08QYiclle7A_J9lho",
  authDomain: "unison-366617.firebaseapp.com",
  projectId: "secure-unison-366617",
  storageBucket: "secure-unison-366617.appspot.com",
  messagingSenderId: "999018163426",
  appId: "1:999018163426:web:03d3db64d53a50c73342bb"
});

const App = () => {
  return(
    <NativeBaseProvider>
      <MainNavigatorScreen />
    </NativeBaseProvider>
  )
}
export default App;