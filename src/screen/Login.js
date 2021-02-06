


    
import React , {useState} from 'react';
import { 

    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    Image,
    TextInput,
    
  
    
} from 'react-native';
import database, { firebase } from '@react-native-firebase/database'
import auth from "@react-native-firebase/auth";
import * as Animatable from 'react-native-animatable';

import {  Button, } from "native-base";


function  Login  (Props)  {
  const [email , setEmail] = useState("");
 const [password , setPassword] = useState("");

  const signin = async function (){
    try{
      const user = await auth().signInWithEmailAndPassword(email, password);
      Props.navigation.navigate('Home')
     
    }catch(e){
      alert("login succefully",e)
    }
    setEmail("")
    setPassword("")
  }

 
 
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={{justifyContent:'center',alignItems: "center"}}>
            <Image
                animation = "shake"
              source={require('../images/blood-c.png')}
              style={styles.logo}
              resizeMode ='stretch'

              />
             
            </View>
            <View>
            <TextInput value={email} onChangeText={(text)=>setEmail(text)}  style={styles.textInput} placeholder="Email"
                />
                 <TextInput value={password} onChangeText={(text)=>setPassword(text)}  style={styles.textInput} placeholder="Password"
                 secureTextEntry={true}
               />
            <Button style={styles.button} onPress={signin}  full>
            <Text style={styles.login}>Login</Text>
          </Button>
          
            <Animatable.View
             animation = 'bounceIn'
          
            >
           
            <Text style={styles.user}>New User please Sign-up</Text>            
            </Animatable.View>
            <Animatable.View
             animation = 'bounceInUp'
             
             >
            <Button style={styles.signup} onPress={()=>Props.navigation.navigate('Signup')} >
            <Text style={styles.signupText}>Sign up</Text>
          </Button>
        
            </Animatable.View>
           
           </View>
              </View> 
        </View>
       
    );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#dcdcdc'
  },
  header: {
    flex: 10,
   
},

logo:{
  width:200,
  height: 200  
},
button:{
  backgroundColor: '#C51000' ,
  marginTop :20
},
login:{
  fontWeight: 'bold',
  color : '#ffff',
  
},
signup:{
 marginLeft : 222,
 width : 120,
 borderRadius: 6 ,
 backgroundColor : '#029799'
},
signupText:{
color: '#fff' ,
marginLeft : 30
}
,
user:{
marginLeft : 10 , 
marginTop : 20 ,
fontSize : 15

},
textInput:{
    marginTop : 20,
    borderColor : '#000' ,
    borderBottomWidth : 1,
    marginLeft:50 ,
    marginRight : 50 ,
    marginBottom : 4

}



});

    