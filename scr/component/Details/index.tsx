import { StyleSheet, View, Image, Dimensions,TouchableOpacity, Text, ScrollView} from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/core'
import Ionic from 'react-native-vector-icons/Ionicons'
import Details from "./Details";

export const DetailProperty = () => {
    const navigation = useNavigation()
    function goBack() {
        // We need to use the screen props `{navigation}` to navigate back
        // it will be introduced in the next lesson `react-navigation`
       navigation.goBack();
      }
  return (
    <ScrollView style={styles.container}>
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={require('../../../assets/image/Photo.png')} />
            <TouchableOpacity onPress={goBack} style = {{position: 'absolute', left:20, top:55, }}>
            <Ionic name="ios-arrow-back" size={25} color='#FFFFFF' ></Ionic>
            </TouchableOpacity>
            <TouchableOpacity style = {{position: 'absolute', left:270, top:55, }}>
            <Ionic name="ios-download-outline" size={25} color='#FFFFFF' ></Ionic>
            </TouchableOpacity>
            <TouchableOpacity style = {{position: 'absolute', left:310, top:55, }}>
            <Ionic name="ios-heart-outline" size={25} color='#FFFFFF' ></Ionic>
            </TouchableOpacity>
      </View>
      <View style={styles.container}>
      <Text style={{position:'absolute', fontSize:25, fontWeight:'bold', color:'#FFFFFF', padding:5}}> Brightlight Festival</Text>
      <View style={styles.titles}>
        <Text variant="labelLarge" style={styles.titlee}>
        <Ionic name="ios-calendar-outline" size={17} color='#FFFFFF' ></Ionic>
        Friday, 24 Aug 2019               6:30PM - 9:30PM
        </Text>
        <Text variant="labelLarge" style={styles.title}>
        <Ionic name="ios-navigate-outline" size={17} color='#FFFFFF' ></Ionic>
        Daboi Concert Hall
        </Text>
        <Text variant="labelMedium" style={styles.subTitle}>
            5/7 Kolejowa, 01-217 Warsaw
        </Text>
        <Text variant="labelLarge" style={styles.titlee}>
        <Ionic name="ios-musical-notes-outline" size={17} color='#FFFFFF' ></Ionic>
        Indie Rock
        </Text>
        <Text variant="labelLarge" style={styles.titlee}>
        <Ionic name="ios-cash-outline" size={17} color='#FFFFFF' ></Ionic>
        €40 - 90
        </Text>
        <Text variant="labelLarge" style={styles.titlee}>
        <Ionic name="md-person" size={17} color='#FFFFFF' ></Ionic>
        Club Kiss
        </Text>
      </View>
      
    </View>
    </View>
    <Details />
    </ScrollView>
  );
};

export default DetailProperty;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#10181F',
    flex:1,
  },
  image:{
    width : Dimensions.get('window').width ,
    height : Dimensions.get('window').height / 1.6
  },
  iconContainer: {
    marginTop:5,
    justifyContent:'center'
  },
  titles: {
    marginTop:40,
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 16,
  },
  titlee:{
    padding:5,
    fontSize:15,
    color: "#FFFFFF",
  },
  title: {
    left:5,
    fontSize:15,
    color: "#FFFFFF",
  },
  subTitle: {
    left:15,
    color: "#A6AAB1",
  },
  
});