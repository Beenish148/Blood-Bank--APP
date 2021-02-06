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
import { Body,List, ListItem, Left,  Right, Thumbnail,} from "native-base";
import { useScrollToTop } from '@react-navigation/native';





function  HomeScreen (Props)  {
const  [data , setData] = useState ([])
useEffect(()=>{
  database().ref("users").once('value' ,Snapshot =>{
    const data1 = Snapshot.toJSON()
    const value = Object.values(data1)
    setData(Object.values(data1))
    // console.log (data1)
  })
 
},[])

console.log("State Data",data )

  

    return (
      <ScrollView>
    
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={{justifyContent:'center',alignItems: "center"}}>
              <Image
              source={require('../images/blod.jpg')}
              resizeMode ='stretch'
              style={styles.image}
              />
            </View>

            



            </View>
            
            <View style={styles.footer}>
            <List>
            <ListItem avatar>
             
              <Body>
                
              {data.map((v,i)=>{
                  return(
                    <View style={styles.data}>
                    <Text style={{fontWeight:'bold'}}  key={i}>Name   {v.name}</Text>
                    <Text>Blood Group  {v.bloodgroup} </Text>
                    <Text>Want to be   {v.status} </Text>
                    <Text>Contact No   {v.number} </Text>
                    <Text>Address      {v.address} </Text>
                    </View>
                   
                  )  
                })}
               

              </Body>
             
            </ListItem>
          </List>
            </View>
            <View style={styles.banner}> 
             <Image
              source={require('../images/blood-.jpg')}
              resizeMode ='stretch'
              style={styles.logo}
                    />
              <TouchableOpacity
              onPress={()=>Props.navigation.navigate('About Donor')}
               style={styles.button}>
                      <Text>See more About Donors</Text>
            </TouchableOpacity>
               <Text style={styles.bannerText}>Safe blood saves life and improves health.
               it is most precious gift that anyone can give to another person: that gift of life
               </Text>  
            </View>
           </View>  
           </ScrollView> 
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: {
},
text:{



},

image:{
  width:360 ,
  height: 170 ,
   
} ,
banner:{
  flex :6,
  backgroundColor : '#CC1500' ,
} ,
bannerText:{
  textAlign: 'center' ,
  color: '#dcdcdc' ,
  marginTop : 10,
  fontWeight: 'bold',
  paddingLeft: 18 ,
  paddingRight: 18 ,
  marginBottom: 30
} ,
logo:{
  height:140,
  marginTop:10
},
btn:{
  backgroundColor : '#dcdcdc',
  marginLeft : 70,
  borderRadius : 5,
  marginTop: 20 ,
  
  
},
btnText:{
  fontWeight:'bold',
  marginLeft:10,
  color : '#C51000'

},
footer:{
  flex : 1,
  backgroundColor : '#fff'
},
button: {
  marginLeft:170,
   width: 170 ,
  backgroundColor: "#DDDDDD",
  padding: 10 ,
 
},
data:{
 marginLeft : 10 ,
 padding : 10 ,
 fontSize : 24 ,
 

}





});