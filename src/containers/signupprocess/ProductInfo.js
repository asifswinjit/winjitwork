import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput, Button, Text, Title,Surface, RadioButton  } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Dropdown } from 'react-native-material-dropdown';
import SignUpHeader from '../../components/signup/SignUpHeader'
 
 
import {Container, Content} from 'native-base'
class ProductInfo extends Component
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
            workIndustry: 'Seafood',
            isProducer:'Yes',
            farmType:'Wild'
        }
        
    }

    static getDerivedStateFromProps(nextProps, prevState){
       
          return null
      
  }
    render()
    { 
      let dropDwonData = [{
        value: 'Gear Used',
      }, {
        value: 'Option 1',
      }, {
        value: 'Option 2',
      }];
      const { workIndustry,isProducer,farmType } =this.state
        return(
          <Container>
             <View><SignUpHeader/></View>
            <Content>
            <View style={styles.MainContainer}>
           

            <View style={{padding:10}}>
              <View style={{marginTop:10}}>
                <Title style={{color:'#3f51b5',alignSelf:'center',fontSize:24}}>Product Information</Title>
              </View>
              <View style={{marginTop:10, flexDirection:'row',justifyContent:'center' }}>
                  <Surface style={styles.greySurface}/>
                  <Surface style={styles.greySurface}/>
                  <Surface style={styles.blueSurface}/>
              </View>

              <View style={styles.queryView}>
                <View style={{marginTop:10}}>
                    <Text style={{color:'#9b9b9b',fontSize:18}}>What industry do you work in?</Text>
                </View>
                <View>
                  <RadioButton.Group
                    onValueChange={workIndustry => this.setState({ workIndustry })}
                    value={workIndustry}
                  >
                    <View style={{flexDirection:'row'}}>
                      <RadioButton color="#3d3d3d" value="Seafood"/>
                      <Text style={styles.radioLabel}>Seafood</Text>
                    </View>
                    <View  style={{flexDirection:'row'}}>
                      <RadioButton  color="#3d3d3d" value="Agriculture" />
                      <Text style={styles.radioLabel}>Agriculture</Text>
                    </View>
                  </RadioButton.Group>
                 </View>
              </View>
               
              <View style={styles.queryView}>
                <View style={{marginTop:10}}>
                    <Text style={{color:'#9b9b9b',fontSize:18}}>Are you a producer?</Text>
                </View>
                <View>
                  <RadioButton.Group
                    onValueChange={isProducer => this.setState({ isProducer })}
                    value={isProducer}
                  >
                    <View style={{flexDirection:'row'}}>
                      <RadioButton color="#3d3d3d" value={true}/>
                      <Text style={styles.radioLabel}>Yes</Text>
                    </View>
                    <View  style={{flexDirection:'row'}}>
                      <RadioButton  color="#3d3d3d" value={false} />
                      <Text style={styles.radioLabel}>No</Text>
                    </View>
                  </RadioButton.Group>
                 </View>
              </View>

              <View style={styles.queryView}>
                <View style={{marginTop:10}}>
                    <Text style={{color:'#9b9b9b',fontSize:18}}>What industry do you work in?</Text>
                </View>
                <View>
                  <RadioButton.Group
                    onValueChange={farmType => this.setState({ farmType })}
                    value={farmType}
                  >
                    <View style={{flexDirection:'row'}}>
                      <RadioButton color="#3d3d3d" value="Wild"/>
                      <Text style={styles.radioLabel}>Wild</Text>
                    </View>
                    <View  style={{flexDirection:'row'}}>
                      <RadioButton  color="#3d3d3d" value="Farmed" />
                      <Text style={styles.radioLabel}>Farmed</Text>
                    </View>
                  </RadioButton.Group>
                 </View>
              </View>
              
               
              <View style={{marginTop:10}}>
                        <Dropdown
                            label='Type'
                            data={dropDwonData}
                            inputContainerStyle={{ borderBottomColor: 'transparent', }}
                            containerStyle={{borderRadius:5,padding:0,borderColor:'#9b9b9b',borderWidth:1,paddingLeft:5}}
                            dropdownOffset={{ top: 15,left:5 }}
                            
                        />
                    </View>
              <View style={{marginTop:10}}>
                  <TextInput
                      label='Species'
                      placeholder="Species"
                      value={this.state.license}
                      onChangeText={license => this.setState({ license })}
                      keyboardType='default'
                      mode='outlined'
                  />
              </View>
              <View style={{marginTop:10, flexDirection:'row'}}>
                <MaterialIcons  name="add-circle" color="#9b9b9b" size={20}/>
                <Text> Add Another Species</Text>
              </View>
              <View style={{marginTop:50,flexDirection:'row', justifyContent:'space-between'}}>
                <Button 
                style={{padding:5,borderRadius:3, left:0,borderWidth:0,width:120}}
                alignSelf='center'
                onPress= { ()=> Actions.signupcompanyprofile()  }
                dark={true}  uppercase={false}   >Back</Button>
                <Button 
                style={{padding:5,borderRadius:3,right:0,width:180}}
                alignSelf='center'
                onPress= { ()=> Actions.login()  }
                dark={true}  uppercase={false} mode='contained' >Complete Sign Up</Button>
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
radioLabel:{
  color:'#3d3d3d',
  fontSize:18,
  padding:5,
},
queryView:{
  marginTop:10,
  paddingLeft:15
}
})

 
export default ProductInfo;
 