import { StyleSheet, View, Image, Dimensions,TouchableOpacity, Text, ScrollView,} from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/core'
import Ionic from 'react-native-vector-icons/Ionicons'


export const Details = () => {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.container}>
    <View style={styles.details}>
    <Text style={{bottom:20 , color:"#373A42" , fontSize:20}}> Details</Text>
    <Text> Free directories: directories are perfect for customers that are searching for a particular topic. What’s great about them is that you only have to post once and they are good for long periods of time. It saves a lot of your time when you don’t have to resubmit your information every week…</Text>
    <TouchableOpacity> 
        <Text style={{top:20 , color:"#FC1055", fontSize:15}}>Read More</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={styles.container}>
    <View style={styles.details}>
    <Text style={{bottom:20 , color:"#373A42" , fontSize:20}}> Details</Text>
    <Text> Free directories: directories are perfect for customers that are searching for a particular topic. What’s great about them is that you only have to post once and they are good for long periods of time. It saves a lot of your time when you don’t have to resubmit your information every week…</Text>
    <TouchableOpacity> 
        <Text style={{top:20 , color:"#FC1055", fontSize:15}}>Read More</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={styles.container}>
    <View style={styles.details}>
    <Text style={{bottom:20 , color:"#373A42" , fontSize:20}}> Details</Text>
    <Text> Free directories: directories are perfect for customers that are searching for a particular topic. What’s great about them is that you only have to post once and they are good for long periods of time. It saves a lot of your time when you don’t have to resubmit your information every week…</Text>
    <TouchableOpacity> 
        <Text style={{top:20 , color:"#FC1055", fontSize:15}}>Read More</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={styles.container}>
    <View style={styles.details}>
    <Text style={{bottom:20 , color:"#373A42" , fontSize:20}}> Details</Text>
    <Text> Free directories: directories are perfect for customers that are searching for a particular topic. What’s great about them is that you only have to post once and they are good for long periods of time. It saves a lot of your time when you don’t have to resubmit your information every week…</Text>
    <TouchableOpacity> 
        <Text style={{top:20 , color:"#FC1055", fontSize:15}}>Read More</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={styles.container}>
    <View style={styles.details}>
    <Text style={{bottom:20 , color:"#373A42" , fontSize:20}}> Details</Text>
    <Text> Free directories: directories are perfect for customers that are searching for a particular topic. What’s great about them is that you only have to post once and they are good for long periods of time. It saves a lot of your time when you don’t have to resubmit your information every week…</Text>
    <TouchableOpacity> 
        <Text style={{top:20 , color:"#FC1055", fontSize:15}}>Read More</Text>
    </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    backgroundColor:'#FFF',
    flex:1,
  },
  details:{
    padding:20
  },
  detail:{
    top:20,
    padding:20
  }
  
});