import React, { Component } from 'react'

import {Text, View, Content, Container } from 'native-base'
import { StyleSheet,ProgressBarAndroid } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Image } from 'react-native';
import WLogo from '../images/wholechain.png'



 export default class Splash extends Component
 {
    constructor(props)
    {
        super(props);
        
    }
    componentWillMount()
    {
       // firebase.initializeApp(firebaseConfig);
        
        // firebase.database().ref('users/1').set(
        //     {
        //         firstname:'Vishal',
        //         lastname:'Waman',
        //         email:'vishalw@winjit.com',
        //         password:'winjit@000',
        //         mobile:'9089786756',
        //         isverified:false

        //     }
        // ).then(()=>{
        //     console.log("Inserted Record");
        // }).catch((error)=>{
        //     console.log("Error => ",error)
        // });
       
       /*****
        get Reference from data base
        *  firebase.database().ref('users').once('value', (data) => {
            console.log(data.toJSON())
        })

        */
        /****
         * Create User With Data and email
         * firebase.auth().createUserAndRetrieveDataWithEmailAndPassword('a123asif@winjit.com','winjit@2').then((data) => {
            console.log("Data UID => ",data.uid);
        }).catch((err) => {
            console.log(" Errrrr ",err);
        });
        
        ** */
        // firebase.auth().signInWithEmailAndPassword('vishalw@winjit.com','winjit@2019')
        // .then(() => {
        //     console.log("Login Success")
        // })
        // .catch(()=>{
        //     console.log("Login Failed")
        // })
        //firebase.database().ref(users)
    }
    render()
    {
        return(
               <View  style={styles.container}>
                    <View style={{alignItems:'center',paddingBottom:10}}>
                    <Image  style={{width:200,height:115}} source={WLogo} />  
                    </View>
                </View>
       )
    }
    componentDidMount()
    {
        setTimeout(function(){Actions.swiperscreen()},4000);
    }
    
 }
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
    backgroundColor:'#3f51b5'
    },
  });