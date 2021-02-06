
import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Button,Icon } from "native-base";

function  SplashScreen  (Props)  {
  
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <Text></Text>
              <Animatable.Image
                animation = "shake"
              source={require('../images/blood-c.png')}
              style={styles.logo}
              resizeMode ='stretch'

              />
              <Text style={styles.text}>
                  BA BLOOD BANK
              </Text>
              </View> 
              < Animatable.View 
              animation = "bounceInUp" 
              
              style={styles.Footer}>
              
              <Button style={styles.Button} onPress={()=>Props.navigation.navigate('Login')} full>
            <Text style={styles.text}>GET STARTED </Text>
            <Icon style={{color : '#C51000'}} name='arrow-forward' />
          </Button>
           
              </Animatable.View>  
            
        </View>
       
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#dcdcdc'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
},
Footer: {
    flex: 1,
    backgroundColor: '#C51000',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 40,
    paddingHorizontal: 40
},
logo:{
    width:200,
    height: 200  
},
text:{
    color : '#C51000' ,
    fontWeight: 'bold' ,
    marginLeft: 20
    
},
Button:{
    marginLeft : 120 ,
    backgroundColor : '#fff'

}


});