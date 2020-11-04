import React from 'react';
import {Text, View,  StyleSheet, Image} from 'react-native';


function App(){
  return<View style={styles.container}>
    <Image source={require('./assets/profile.jpg')} style={styles.image}/>
    <View style={styles.detailContainer}>
      <Text style={styles.label}>Name</Text>
      <Text style={[ styles.label,styles.info]}>Irene Ntungwe</Text>
    </View>
    <View style={styles.detailContainer}>
      <Text style={styles.label}>Email</Text>
      <Text style={[ styles.label,styles.info]}>ntongweirene@gmail.com</Text>
    
    </View>
    <View style={styles.detailContainer}>
      <Text style={styles.label}>Gender</Text>
      <Text style={[ styles.label,styles.info]}>Female</Text>
      </View>
      </View>
  
}

const styles = StyleSheet.create({
   container:{
     flex:1,
     marginHorizontal:5
   },
   image:{
     marginTop:100,
     width:150,
     height:150,
     marginBottom:30,
     alignSelf:"center",
     borderRadius:75
   },
   detailContainer:{
     flexDirection:"row",
     marginVertical:3
   },

   label:{
     borderColor:"black",
     borderWidth:1,
     fontSize:20,
     flex:2.5,
     paddingHorizontal:5
   },

   info:{
     flex:7.5
   }
 });


 

export default App;