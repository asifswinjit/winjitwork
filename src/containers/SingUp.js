import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput, Button } from 'react-native-paper';
import { DEVICE_HEIGHT } from '../app.config'
import { connect } from 'react-redux';
import { userSignUp, clearUserSignUpProps } from '../actions/signup_action'
import  LoadingWindow  from '../components/LoaderWindow'
import { DEVICE_WIDTH } from '../app.config'
//const LoginImage = require('../images/logo_blue.png') 
const spaceTop = ((3*DEVICE_HEIGHT)/100)
const spaceTopForTexBox = ((1*DEVICE_HEIGHT)/100)
const iconDim = ((15*DEVICE_HEIGHT)/100)
class SignUp extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            confirmpassword:'',
            contact:'',
            country:'',
            showLoader:false,
            clearProps:false,
        }
    }

    SignUpPress = ()=> {
        this.props.clearUserSignUpProps();
        const { firstname, lastname,email,password,contact, confirmpassword,country } = this.state
        const userObject =  {firstname, lastname,email,password,contact, confirmpassword,country}
       this.props.userSignUp(userObject);
    }
   
    static getDerivedStateFromProps(nextProps, prevState){
        var stateObj = { showLoader:false,clearProps:false}
        console.log("nextProps =",nextProps)
        console.log("prevState =",prevState)
        if(nextProps.isLoading!==prevState.showLoader)
        {
           stateObj.showLoader =nextProps.isLoading
        }

        if(nextProps.signupRes!==undefined&&nextProps.signupRes.message!==undefined){
            alert(nextProps.signupRes.message)
            if(nextProps.signupRes.success)
            {
                Actions.signupuserprofile();
            }else if(nextProps.signupRes.success===false){
                stateObj.clearProps = true
            }
        }
        
        return stateObj;
        
    }

    componentDidMount(){
        console.log("componentDid MOUNT")
    }
    componentDidUpdate(){
        console.log(" componentDid UPDATE")
        if(this.state.clearProps)
        {
            this.setState({clearProps:false},()=>{
                this.props.clearUserSignUpProps()
            })
            
        }
    }
    render()
    {
        if(this.state.showLoader)
        { 
            return  <LoadingWindow />;
        } 
        return(
            <Container>
                <Content padder>
                <View style={{marginTop:spaceTop, paddingLeft:10,paddingRight:10, flex:1,}}>
                    <View style={{alignItems:'center'}}>
                        <View style={{width:iconDim,height:iconDim,borderRadius:(iconDim/2),backgroundColor:'#3f51b5',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                            <MaterialCommunityIcons name="account-group" size={(iconDim/2)} style={{ color:'#fff',textAlign:'center',}}/>
                        </View>
                        <View style={{paddingTop:10}}><Text style={{fontSize:24}}>Sign Up</Text></View>
                    </View>
                    <View style={{marginTop:spaceTopForTexBox}}>
                        <TextInput
                                label='First name'
                                placeholder="First name"
                                value={this.state.firstname}
                                onChangeText={firstname => this.setState({ firstname })}
                                keyboardType='default'
                                mode='outlined'
                        />
                    </View>
                    <View style={{marginTop:spaceTopForTexBox}}>
                        <TextInput
                                label='Last name'
                                placeholder="Last name"
                                value={this.state.lastname}
                                onChangeText={lastname => this.setState({ lastname })}
                                keyboardType='default'
                                mode='outlined'
                        />
                    </View>
                   
                <View style={{marginTop:spaceTopForTexBox}}>
                    <TextInput
                            label='Email'
                            placeholder="Email address"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            keyboardType='email-address'
                            mode='outlined'
                    />
                </View>
                <View style={{marginTop:spaceTopForTexBox}}>
                        <TextInput
                                label='Password'
                                placeholder="Password (8+ characters)"
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                                keyboardType='default'
                                mode='outlined'
                                secureTextEntry={true}
                        />
                </View>
                <View style={{marginTop:spaceTopForTexBox}}>
                        <TextInput
                                label='Confirm Password'
                                placeholder="Confirm Password"
                                value={this.state.confirmpassword}
                                onChangeText={confirmpassword => this.setState({ confirmpassword })}
                                keyboardType='default'
                                mode='outlined'
                                secureTextEntry={true}
                        />
                </View>
                <View style={{marginTop:spaceTopForTexBox}}>
                    <TextInput
                            label='Mobile'
                            placeholder="Mobile number"
                            value={this.state.contact}
                            onChangeText={contact => this.setState({ contact })}
                            keyboardType='number-pad'
                            mode='outlined'
                    />
                </View>
                <View style={{marginTop:spaceTopForTexBox}}>
                    <TextInput
                            label='Country'
                            placeholder="Country"
                            value={this.state.country}
                            onChangeText={country => this.setState({ country })}
                            keyboardType='default'
                            mode='outlined'
                    />
                </View>
                <View style={{marginTop:10,paddingTop:10,paddingBottom:10}}>
                  <Text style={{color:'#8b8b8b',fontSize:12,textAlign:'left',padding:5 }}>By continuing, you agree to Wholechains Terms &amp; Conditions and Privacy Policy.</Text>
              </View>
                <View style={{marginTop:spaceTopForTexBox,flexDirection: "row", justifyContent: "center"}}>
                    <Button
                        mode="contained"
                        onPress={ this.SignUpPress }
                        style = {{width:(DEVICE_WIDTH/1.5),borderRadius:3,padding:10}}
                        >
                         Get Started 
                    </Button>
                </View>
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
    signupRes: state.user.userSignUp || undefined,
    isLoading: state.status.loading || false,
  });
  
  const mapDispatchToProps = {
   userSignUp, clearUserSignUpProps
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp);