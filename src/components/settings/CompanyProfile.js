import React, { Component } from 'react'
 
import { Content, View, } from 'native-base' 
import { StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper';

class CompanyProfile extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            companyName:'',
            streetAddress:'',
            city:'',
            zipcode:'',
            country:'',
            myState:'',
            businessPhone:'',
            companyRegNum:'',
        }
    }

    render()
    {
        return(
            <Content padder>
                <View>
                    <View style={{marginTop:20}}>
                        <TextInput
                            label='Company name'
                            placeholder="Company name"
                            value={this.state.companyName}
                            onChangeText={companyName => this.setState({ companyName })}
                            keyboardType='default'
                            mode='outlined'
                        />
                    </View>
                    <View style={{marginTop:15}}>
                        <TextInput
                            label='Street address'
                            placeholder="Street address"
                            value={this.state.streetAddress}
                            onChangeText={streetAddress => this.setState({ streetAddress })}
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
                    <View style={{marginTop:20}}>
                    <TextInput
                                    label='Business phone'
                                    placeholder="Business phone"
                                    value={this.state.businessPhone}
                                    onChangeText={businessPhone => this.setState({ businessPhone })}
                                    keyboardType='number-pad'
                                    mode='outlined'
                            />
                            
                    </View>
                    <View style={{marginTop:20}}>
                    <TextInput
                                    label='Company registration number'
                                    placeholder="Company registration number"
                                    value={this.state.companyRegNum}
                                    onChangeText={companyRegNum => this.setState({ companyRegNum })}
                                    keyboardType='default'
                                    mode='outlined'
                            />
                            
                    </View>
                </View>
            </Content>
               
                    
                
        )
    }
}
const styles = StyleSheet.create({
   roundedTextbox: {
        borderRadius:10,
        borderBottomWidth:2,
        borderTopWidth:2,
        borderLeftWidth:2,
        borderRightWidth:2
    }
})
export default CompanyProfile;