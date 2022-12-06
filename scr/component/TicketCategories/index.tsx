import React, { Component } from 'react';
import { View, StyleSheet,  Image, TouchableOpacity } from 'react-native';
import {NativeBaseProvider, Text, Box, Input, Center, Heading, VStack, FormControl, Link, Button, HStack, ScrollView, } from "native-base";

const categories = ['    Phil Collins' ]
const categorie = ['    TV on the Radio' ]
const categori = ['    FC Barcelona' ]

class TicketCategories extends Component{
    state = {  }
    render()
     {
        return(
            <ScrollView
            position='absolute' marginTop={130}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
                {
                    categories.map((category, index) => (
                        <View key={index}>
                        <TouchableOpacity style={{ alignItems:'center' ,width:150 , height:50 , justifyContent:'space-between' ,flexDirection:'row', marginLeft:10, borderWidth:0.3, borderColor:'#373A42', borderRadius:15, }}>
                            <Text color='#FFFFFF' textAlign='center' fontSize={12}>{category}</Text>
                        </TouchableOpacity>
                        </View>
                    ))
                }
                {
                    categorie.map((categorys, index) => (
                        <View key={index}>
                        <TouchableOpacity style={{alignItems:'center' ,width:150 , height:50 , justifyContent:'space-between' ,flexDirection:'row', marginLeft:10, borderWidth:0.3, borderColor:'#373A42', borderRadius:15, }} >
                            <Text color='#FFFFFF' textAlign='center' fontSize={12}> {categorys} </Text>
                        </TouchableOpacity>
                        </View>
                    ))
                }
                {
                    categori.map((categoryse, index) => (
                        <View key={index}>
                        <TouchableOpacity style={{alignItems:'center' , width:150 , height:50 , justifyContent:'space-between' ,flexDirection:'row', marginLeft:10, borderWidth:0.3, borderColor:'#373A42', borderRadius:15, }}>
                            <Text color='#FFFFFF' textAlign='center' fontSize={12} >{categoryse}</Text>
                        </TouchableOpacity>
                        </View>
                    ))
                }
            </ScrollView>
        )
     }
};

export default TicketCategories;
