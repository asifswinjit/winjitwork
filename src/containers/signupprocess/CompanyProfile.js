import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput, Button, Text, Title,Surface } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SignUpHeader from '../../components/signup/SignUpHeader'
 
import {Container, Content} from 'native-base'
class CompanyProfile extends Component
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
        }
         
    }

    static getDerivedStateFromProps(nextProps, prevState){
       
          return null
      
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
                <Title style={{color:'#3f51b5',alignSelf:'center',fontSize:24}}>Company Profile</Title>
              </View>
              <View style={{marginTop:10, flexDirection:'row',justifyContent:'center' }}>
                  <Surface style={styles.greySurface}/>
                  <Surface style={styles.blueSurface}/>
                  <Surface style={styles.greySurface}/>
              </View>
              <View style={{marginTop:10}}>
                  <TextInput
                          //theme={{colors:{background:'#efefef',placeholder:'#a3a3a3'}}}
                          theme={{colors:{background:'#efefef'}}}
                          label='Company name'
                          placeholder="Company name"
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
                          label='Street address'
                          placeholder="Last name"
                          value={this.state.lastname}
                          onChangeText={lastname => this.setState({ lastname })}
                          keyboardType='default'
                          mode='outlined'
                      />
              </View>
              <View style={{marginTop:20, flexDirection:'row',flex:1}}>
                        <View style={{width:'48%'}}>
                        <TextInput
                            label='City'
                            placeholder="City"
                            value={this.state.city}
                            onChangeText={city => this.setState({ city })}
                            keyboardType='default'
                            mode='outlined'
                        />
                       </View>
                       <View style={{width:'48%',right:0,position:'absolute'}}>
                            <TextInput
                                label='Zip code'
                                placeholder="Zip code"
                                value={this.state.zipcode}
                                onChangeText={zipcode => this.setState({ zipcode })}
                                keyboardType='number-pad'
                                mode='outlined'
                            />
                       </View>
                       
                    </View>
                    <View style={{marginTop:20, flexDirection:'row',flex:1}}>
                        <View style={{width:'48%'}}>
                            <TextInput
                                    label='Country'
                                    placeholder="Country"
                                    value={this.state.country}
                                    onChangeText={country => this.setState({ country })}
                                    keyboardType='default'
                                    mode='outlined'
                            />
                       </View>
                    <View style={{width:'48%',right:0,position:'absolute'}}>
                        <TextInput
                                    label='State'
                                    placeholder="State"
                                    value={this.state.myState}
                                    onChangeText={myState => this.setState({ myState })}
                                    keyboardType='default'
                                    mode='outlined'
                            />
                       </View>
                       
                    </View>
              <View style={{marginTop:10}}>
                      <TextInput
                          //theme={{colors:{background:'#efefef',placeholder:'#a3a3a3'}}}
                          theme={{colors:{background:'#efefef'}}}
                          label='Business phone'
                          placeholder="Business phone"
                          value={this.state.contact}
                          onChangeText={contact => this.setState({ contact })}
                          keyboardType='number-pad'
                          mode='outlined'
                          
                          
                      />
                  
              </View>
              <View style={{marginTop:10}}>
              <TextInput
                          theme={{colors:{background:'#efefef',}}}
                          label='Company registration number'
                          placeholder="Company registration number"
                          value={this.state.country}
                          onChangeText={country => this.setState({ country })}
                          keyboardType='default'
                          mode='outlined'
                          
                          
                      />
              </View>
              <View style={{marginTop:10}}>
                  <TextInput
                      label='License / permit number'
                      placeholder="License/ permit number"
                      value={this.state.license}
                      onChangeText={license => this.setState({ license })}
                      keyboardType='default'
                      mode='outlined'
                  />
              </View>
              <View style={{marginTop:10}}>
                  <TextInput
                      label='Vessel number'
                      placeholder="Vessel number"
                      value={this.state.license}
                      onChangeText={license => this.setState({ license })}
                      keyboardType='default'
                      mode='outlined'
                  />
              </View>
              
              <View style={{marginTop:50,flexDirection:'row', justifyContent:'space-between'}}>
                <Button 
                style={{padding:5,borderRadius:3, left:0,borderWidth:0,width:120}}
                alignSelf='center'
                onPress= { ()=> Actions.signupuserprofile()  }
                dark={true}  uppercase={false}   >Back</Button>
                <Button 
                style={{padding:5,borderRadius:3,right:0,width:120}}
                alignSelf='center'
                onPress= { ()=> Actions.signupproductinfo()  }
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

 
export default CompanyProfile;
 