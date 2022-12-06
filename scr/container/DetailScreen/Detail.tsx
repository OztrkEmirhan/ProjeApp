import { useNavigation } from '@react-navigation/core'
import { StatusBar } from "expo-status-bar";
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button } from "react-native-paper";
import DetailProperty from '../../component/Details';
import Details from '../../component/Details/Details';

const DetailScreen = () => {

  return (
    <View style={styles.container}>
      <DetailProperty/>
      <View style={styles.textButton} >
          <Text style={{fontSize:15, color:'#FFF'}}>€30 - €80</Text>
          <Text style={{fontSize:10, color:'#80848B'}}>Get now on ebilet.pl</Text>
      </View>
      <Button
        style={styles.buyButton}
        icon={"cart"}
        onPress={() => alert("Give me the Money")}
      >
        BUY THIS SHIP
      </Button>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#10181F'
  },
  textButton:{
    top:20,
    marginLeft:40,
    padding: 5,
  },
  buyButton: {
    alignItems: "flex-end",
    width:200,
    marginLeft:150,
    bottom:20,
    backgroundColor: "#FFFFFF",
    padding: 5,
    borderRadius: 30,
  },
});