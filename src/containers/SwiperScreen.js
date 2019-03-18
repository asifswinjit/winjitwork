import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, ImageBackground, Image
} from 'react-native';
 import { Container } from 'native-base'
 import Swiper from 'react-native-swiper';
 import { Button } from 'react-native-paper'
import { Actions } from 'react-native-router-flux';
 const bgImage = require('../images/green_bg.jpg')
 const logoImage = require('../images/wholechain.png')


const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(120,120,120,0.1)',
    paddingLeft:50,
    paddingRight:50,
     height:'100%',
     position:'absolute'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(120,120,120,0.1)',
    paddingLeft:40, 
    paddingRight:40,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(120,120,120,0.1)',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    textAlign:'center',
    marginTop:'30%'
  
  }
})
 
export default class SwiperScreen extends Component {
  render(){
    return (
        <Container>
          <ImageBackground source={bgImage}  imageStyle ={{ resizeMode: 'cover',}} style={{ width: '100%', height: '100%'}}>
         
            <Swiper style={styles.wrapper} showsButtons={false} 
                    activeDotStyle={{marginBottom:50}} 
                    dotStyle={{marginBottom:50}} 
                    dotColor="#9b9b9b" 
                    activeDotColor="#fff">
                <View style={styles.slide1}>
                    <Image  style={{width:200,height:115}} source={logoImage} />  
                    <Text style={styles.text}>Provide traceable  products to your customers</Text>
                </View>
                <View style={styles.slide1}>
                    <Image  style={{width:200,height:115}} source={logoImage} />  
                    <Text style={styles.text}>Scan product records from your suppliers</Text>
                </View>
                <View style={styles.slide1}>
                    <Image  style={{width:200,height:115}} source={logoImage} />  
                    <Text style={styles.text}>Store all your product records for traceability</Text>
                </View>
                <View style={styles.slide1}>
                    <Image  style={{width:200,height:115}} source={logoImage} />  
                    <Text style={styles.text}>Trace products all the way through your supply chain</Text>
                </View>
            </Swiper>
            <View style={{alignItems:'center',alignContent:'center', justifyContent:'center',}}>
                <Button 
                    onPress={() => Actions.signup()}
                    style={{borderWidth:2,width:300, padding:5,borderColor:'#fff', marginBottom:20,bottom:20, }} 
                    uppercase={false} color='#fff'
                    >
                    <Text style={{fontSize:18,}}>Sign up</Text>
                </Button>
                <Text style={{color:'#9b9b9b',fontSize:16, fontWeight:'normal', marginBottom:15}}> Already have an account? <Text style={{color:'#fff'}} onPress={() => Actions.login()}> Log in </Text></Text>
            </View>
                  
            </ImageBackground>
        </Container>
      
    );
  }
}
 