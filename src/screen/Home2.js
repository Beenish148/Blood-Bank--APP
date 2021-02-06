import React , {useState,useEffect} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    Image,
    ScrollView, 
    SnapshotViewIOS,
    
    
} from 'react-native';
import database, { firebase } from '@react-native-firebase/database';
import {  Card, CardItem, Body, Button,} from "native-base";
import { useScrollToTop } from '@react-navigation/native';

function  HomeScreen2 (Props)  {
    return (
      <ScrollView>
    
      <View style={styles.container}>   
      <View style={{justifyContent:'center',alignItems: "center"}}>
           <Image
              source={require('../images/bloodtypes.jpeg')}
              resizeMode ='stretch'
              style={{width:360,height: 340}}
              />
            </View>

        
            <View style={{justifyContent:'center',alignItems: "center"}}>
              <Image
              source={require('../images/Blood-Donorpi.jpg')}
              resizeMode ='stretch'
              style={styles.image}
              />
            </View>
            </View>
             
           </ScrollView> 
    );
};

export default HomeScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
 
image:{
  width:360 ,
  height: 900 ,
   
} ,






});