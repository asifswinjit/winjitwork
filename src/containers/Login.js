import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TextInput, Button } from 'react-native-paper';
import { DEVICE_HEIGHT } from '../app.config'
import { connect } from 'react-redux';

import  LoadingWindow  from '../components/LoaderWindow'

import { validateUser,clearUserProps } from '../actions/signup_action'
 
//const LoginImage = require('../images/logo_blue.png') 

const spaceTop = ((10*DEVICE_HEIGHT)/100)
class Login extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            email:'',
            password:'',
            showLoader:false,
            userLogin:{},
            responseMessage:'',
            emailVerified:false,
            clearUserProps:false,
            
        }

    }
 
     
    static getDerivedStateFromProps(nextProps, prevState){
        console.log("nextProps > ",nextProps)
        console.log("prevState > ",prevState)
        var stateObj ={showLoader:false,responseMessage:''}
        if(nextProps.isLoading!==prevState.showLoader)
        {
           stateObj.showLoader =nextProps.isLoading
        }
         
        //if(nextProps.userLogin===undefined && prevState.responseMessage!=='' )
        if(nextProps.userLogin===undefined)
        {
            stateObj.responseMessage=''
        }
        if(nextProps.userLogin!==undefined)
            {
                if(nextProps.userLogin.success===false && nextProps.userLogin.message!==prevState.responseMessage)
                { 
                    alert(nextProps.userLogin.message)
                    stateObj.responseMessage =nextProps.userLogin.message
                    stateObj.clearUserProps = true
                }
                if(nextProps.userLogin.success===true && nextProps.userLogin.message!==prevState.responseMessage)
                {
                    if(nextProps.userLogin.data.user.emailVerified){
                        alert(nextProps.userLogin.message)
                        stateObj.responseMessage =nextProps.userLogin.message
                        stateObj.emailVerified=true;
                        stateObj.clearUserProps = true
                    }
                    else{
                        alert("Email Is not veridifed, Please verify your email")
                        stateObj.responseMessage ="Email Is not veridifed, Please verifye your email";
                        stateObj.clearUserProps = true
                    }
                }
               
            }
       
        return stateObj;
    }

 
    componentDidMount(){
        this.setState({showLoader:false})
        console.log("SETTING LOADER STATUS TO FALSE")
     }
    componentDidUpdate(prevProps,prevState)
    {
        console.log("========DID UPDATE============")
        console.log("PPROPS ",prevProps)
        console.log("PSTATE",prevState);
        console.log("---------------")
        if(this.state.clearUserProps)
        {
            
            this.setState({clearUserProps:false},()=>{
                this.props.clearUserProps();
            })
        }
        if(this.state.emailVerified)
        {
            Actions.tabcontainer();
           // Actions.signupuserprofile();
        }
    }
    checkLogin =()=>{
       
        console.log("CHECK LOGIN FUNCTION ")
        this.props.clearUserProps();
        const { email,password} =this.state;
        this.props.validateUser(email,password);
     }
     

    render()
    {console.log("IN RENDER = ",this.state.showLoader)
        
        if(this.state.showLoader)
        {console.log("SHOWING LOADER")
            return  <LoadingWindow />;
        }
        return(
            <Container>
                <Content padder>
                <View style={{marginTop:spaceTop,padding:10,heigh:DEVICE_HEIGHT, flex:1,}}>
                    <View style={{alignItems:'center'}}>
                        <View style={{width:100,height:100,borderRadius:50,backgroundColor:'#3f51b5',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                            <MaterialIcons name="lock" size={50} style={{ color:'#fff',textAlign:'center',}}/>
                        </View>
                        <View style={{paddingTop:10}}><Text style={{fontSize:24}}>Sign In</Text></View>
                    </View>
                <View style={{marginTop:20}}>
                    <TextInput
                            label='Email'
                            placeholder="Email address"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            keyboardType='email-address'
                            mode='outlined'
                    />
                </View>
                <View style={{marginTop:20}}>
                        <TextInput
                                label='Password'
                                placeholder="Password"
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                                keyboardType='default'
                                mode='outlined'
                                secureTextEntry
                        />
                </View>
               
                <View style={{marginTop:20,flexDirection: "row", justifyContent: "center"}}>
                    <Button 
                        icon = 'lock'
                        mode="contained"
                        onPress={this.checkLogin.bind(this)}
                        style = {{width:'100%',padding:10}}
                        >
                          Login 
                    </Button>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingTop:15}}>
                    <View><Text style={styles.linkText}>Forgot Password ?</Text></View>
                    <View><Text style={styles.linkText} onPress={() => Actions.signup()}>Sign Up</Text></View>                    
                </View>
                {/* <View>
                <Text style={styles.linkText} onPress={() => Actions.signupuserprofile()}>Test</Text>
                </View> */}
                </View>
                    
                </Content>
               
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    linkText:{
        fontSize:16,
        color:'#3f51b5',
        fontWeight:'bold'
    }
})



const mapStateToProps = state => ({
    userLogin: state.user.userLogin || undefined,
    //loaderStatus:state.Common.loader || {},
    isLoading: state.status.loading || false,
  });
  
  const mapDispatchToProps = {
   validateUser,
   clearUserProps
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
 