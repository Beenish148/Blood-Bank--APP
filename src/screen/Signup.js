   
import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    Image,
    TextInput,
    ScrollView
    
  
   
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import auth from "@react-native-firebase/auth";
import {Picker} from '@react-native-picker/picker';

import { Form, Item,Input, Button, } from "native-base";
import { useState } from 'react/cjs/react.development';
import database, { firebase } from '@react-native-firebase/database';





function  Signup  (Props)  {
  const [status, setStatus] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [age, setAge] = useState("");
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [city , setCity] = useState("");
  const [address , setAddres] = useState("");
  const [number , setNumber] = useState("");
  
    const signup = async function (){
        try{
         const user =  await auth().createUserWithEmailAndPassword(email, password)
         Props.navigation.navigate('Login')
         let users = {
          name ,
          email,
          password,
           city,
           address,
           number,
           age ,
           status,
           bloodgroup
           
    

         }
         database().ref('/').child('users').push(users)
        }catch(e){
          alert("Register succefully",e)
        }
        setEmail("")
        setPassword("")
      }
    
    
     
    return (
      <ScrollView>
      <View style={styles.container}>
          <Animatable.View 
           animation = "slideInRight" 
          >
             <Text style={styles.header}>Registration</Text>    
            </Animatable.View> 
            <View>
            <TextInput value={name} onChangeText={(text)=>setName(text)} style={styles.textInput} placeholder="Full Name"
                />
            <TextInput value={email} onChangeText={(text)=>setEmail(text)} style={styles.textInput} placeholder="Email"
                />
                 <TextInput  value={password}onChangeText={(text)=>setPassword(text)} style={styles.textInput} placeholder="Password"
                 secureTextEntry={true}
               />
                <TextInput  value={city}onChangeText={(text)=>setCity(text)} style={styles.textInput} placeholder="City" 
               />
                <TextInput  value={age}onChangeText={(text)=>setAge(text)} style={styles.textInput} placeholder="Age" 
               />
                <TextInput  value={address}onChangeText={(text)=>setAddres(text)} style={styles.textInput} placeholder="Addres" 
               />
                <TextInput keyboardType={'phone-pad'} value={number}onChangeText={(text)=>setNumber(text)} style={styles.textInput} placeholder="Mobile Number" 
               />
               

                  <Picker 
                    selectedValue={bloodgroup}
                    style={{ height: 100, width: 150 , borderWidth:1, borderColor: 'red' }}
                    style={styles.textInput}
                    onValueChange={(itemValue, itemIndex) => setBloodgroup(itemValue)}
                    >
                  <Picker.Item label=" Blood Group" value="blood" />
                  <Picker.Item label="A+" value="A+" />
                  <Picker.Item label="A-" value="A-" />
                  <Picker.Item label="AB+" value="AB+" />
                  <Picker.Item label="AB-" value="AB-" />
                  <Picker.Item label="B+" value="B+" />
                  <Picker.Item label="B-" value="B-" />
                  <Picker.Item label="O+" value="O+" />
                  <Picker.Item label="O-" value="O-" />
                </Picker>
                <Picker 
                    selectedValue={status}
                    style={{ height: 100, width: 150 , borderWidth:1, borderColor: 'red' }}
                    style={styles.textInput}
                    onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
                    >
                  <Picker.Item label="Select Status" value="Select Status" />
                  <Picker.Item label="Donor" value="Donor" />
                  <Picker.Item label="Recipient" value="Recipient" />
                </Picker>

                 
                <Button
                
                onPress={signup} block style={styles.btn}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </Button>
                <Text style={{ marginBottom: 10, marginLeft:70 }}>
                  You have Already Account?
                
                  <TouchableOpacity 
                  onPress={()=>Props.navigation.navigate('Login')}
                   >
                    <Text style={{fontWeight:'bold' ,marginLeft:15}}>
                      Login
                    </Text>
                  </TouchableOpacity>
  
                  </Text>
                    
            </View>  
           </View>
           </ScrollView>
           
       
    );
   
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#dcdcdc' ,
   
  },
  header: {
   fontSize :20 ,
   justifyContent: 'center',
   textAlign : 'center' ,
   marginTop :  30 ,
   fontWeight:'bold' ,
   fontStyle: 'italic' ,
   color: '#029799' 


   
},
textInput:{
    marginTop : 20,
    borderColor : '#000' ,
    borderBottomWidth : 1,
    marginLeft:40 ,
    marginRight : 40

},
btn:{
    marginTop : 50 ,
    backgroundColor : '#029799' ,
    marginLeft:30 ,
    marginRight : 30 ,
    borderRadius : 5 ,
    marginBottom: 20 ,
    width: 100
    
},
btnText:{
    color : '#fff' ,
    fontWeight : 'bold'
},







});

    