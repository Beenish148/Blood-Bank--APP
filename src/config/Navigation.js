
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/Home' ; 
import SplashScreen from '../screen/SplachScreen';
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import  HomeScreen2 from '../screen/Home2';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Welacome" component={SplashScreen} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerStyle:{backgroundColor:'#C51000'} , headerTintColor:'white'}} />
      <Stack.Screen name="Home" component={HomeScreen}  options={{headerStyle:{backgroundColor:'#C51000' }, headerTintColor:'white' }} />
      <Stack.Screen name="About Donor" component={HomeScreen2}  options={{headerStyle:{backgroundColor:'#C51000' }, headerTintColor:'white' }} />
      <Stack.Screen name="Signup" component={Signup} options={{headerStyle:{backgroundColor:'#C51000' }, headerTintColor:'white' }} />
     
      
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}
export default MyStack;

