import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput, Button, Text, Title,Surface } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Container, Content} from 'native-base'

import SignUpHeader from '../../components/signup/SignUpHeader'
 
import { getCurrentUser, updateCurrentUser } from '../../actions/profile_action'

class UserProfile extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            emailId:'',
            contact:'',
            country:'',
            license:'',
        }
        this.props.getCurrentUser()
    }

    static getDerivedStateFromProps(nextProps, prevState){
      console.log("nextProps =",nextProps)
      console.log("prevState =",prevState)
      var  stateObj = prevState;
      if((!prevState.emailId || !prevState.contact || !prevState.firstname|| !prevState.lastname)  &&  nextProps.userProfile!==undefined)
      {
          stateObj.emailId = nextProps.userProfile.data.email
          stateObj.contact = nextProps.userProfile.data.phNumber
          stateObj.firstname = nextProps.userProfile.data.firstName
          stateObj.lastname = nextProps.userProfile.data.lastName
          stateObj.country = nextProps.userProfile.data.country
          stateObj.license = nextProps.userProfile.data.licensePermitNumber
         // stateObj.country = nextProps.userProfile.data.country
      }
     
      if(prevState === stateObj)
      {
          console.log("Prev State === StateObj")
          return null
      }
      return stateObj;
  }
    render()
    {
        return(
          <Container>
             <View><SignUpHeader/></View>
            <Content>
            <View style={styles.MainContainer}>
           

            <View style={{padding:10}}>
              <View style={{marginTop:10}}>
                <Title style={{color:'#3f51b5',alignSelf:'center',fontSize:24}}>My Profile</Title>
              </View>
              <View style={{marginTop:10, flexDirection:'row',justifyContent:'center' }}>
                  <Surface style={styles.blueSurface}/>
                  <Surface style={styles.greySurface}/>
                  <Surface style={styles.greySurface}/>
              </View>
              <View style={{marginTop:10}}>
                  <TextInput
                          //theme={{colors:{background:'#efefef',placeholder:'#a3a3a3'}}}
                          theme={{colors:{background:'#efefef'}}}
                          label='First name'
                          placeholder="First name"
                          value={this.state.firstname}
                          onChangeText={firstname => this.setState({ firstname })}
                          keyboardType='default'
                          mode='outlined'
                      />
              </View>
              <View style={{marginTop:10}}>
                  <TextInput
                          //theme={{colors:{background:'#efefef',placeholder:'#a3a3a3'}}}
                          theme={{colors:{background:'#efefef'}}}
                          label='Last name'
                          placeholder="Last name"
                          value={this.state.lastname}
                          onChangeText={lastname => this.setState({ lastname })}
                          keyboardType='default'
                          mode='outlined'
                      />
              </View>
              <View style={{marginTop:10}}>
                      <TextInput
                          //theme={{colors:{background:'#efefef',placeholder:'#a3a3a3'}}}
                          theme={{colors:{background:'#efefef'}}}
                          label='Email'
                          placeholder="Email address"
                          value={this.state.emailId}
                          onChangeText={emailId => this.setState({ emailId })}
                          keyboardType='email-address'
                          mode='outlined'
                          disabled = {true}
                      />
              </View>
              <View style={{marginTop:10}}>
                      <TextInput
                          //theme={{colors:{background:'#efefef',placeholder:'#a3a3a3'}}}
                          theme={{colors:{background:'#efefef'}}}
                          label='Phone number'
                          placeholder="Phone number"
                          value={this.state.contact}
                          onChangeText={contact => this.setState({ contact })}
                          keyboardType='number-pad'
                          mode='outlined'
                          
                          
                      />
                  
              </View>
              <View style={{marginTop:10}}>
              <TextInput
                          theme={{colors:{background:'#efefef',}}}
                          label='Country'
                          placeholder="Country"
                          value={this.state.country}
                          onChangeText={country => this.setState({ country })}
                          keyboardType='default'
                          mode='outlined'
                          
                          
                      />
              </View>
               <View style={{marginTop:10}}>
                  {/* <TextInput
                      label='License / permit number'
                      placeholder="License/ permit number"
                      value={this.state.license}
                      onChangeText={license => this.setState({ license })}
                      keyboardType='default'
                      mode='outlined'
                  /> */}
              </View>  
             
              <View style={{marginTop:30,flexDirection:'row', justifyContent:'space-between'}}>
                <Button 
                style={{padding:5,borderRadius:3, left:0,borderWidth:0,width:120}}
                alignSelf='center'
                onPress= { ()=> Actions.login()  }
                dark={true}  uppercase={false}   >Back</Button>
                <Button 
                style={{padding:5,borderRadius:3,right:0,width:120}}
                alignSelf='center'
                onPress= { ()=> {
                                this.props.updateCurrentUser(this.state);
                                Actions.signupcompanyprofile()
                              }  }
                dark={true}  uppercase={false} mode='contained' >Next</Button>
              </View>
          </View>

          </View>
            </Content>
          </Container>
          
        )
    }
}
const styles = StyleSheet.create({
  MainContainer: 
{
 flex:1,
 backgroundColor: '#efefef',
},
greySurface: {
  backgroundColor:'#9b9b9b',
  height: 8,
  width: 8,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 4,
  borderRadius:4,
  margin:3,
},
blueSurface: {
  backgroundColor:'#3f51b5',
  height: 8,
  width: 8,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 4,
  borderRadius:4,
  margin:3,
},
})

const mapStateToProps = state => ({
  userProfile: state.profile.userprofile || undefined,
  isLoading: state.status.loading || false,
});

const mapDispatchToProps = {
  getCurrentUser, updateCurrentUser
};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
 