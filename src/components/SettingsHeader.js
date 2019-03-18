import React, { Component } from 'react'
import { Left, Right, Text , Header, Button,  Body, Title, Subtitle,Icon } from 'native-base'
import { View } from 'react-native'
export default class SettingsHeaderTop extends Component
{
    constructor(props)
    {
        super(props)
    }
     render()
     {

         return(
             
             <Header span noLeft style={{height:175}}>
                <View style={{flex:1,fleaxDirection:'row', left:0,float:'left',marginTop:10,}}>
                    <Title>{this.props.title!==undefined ? this.props.title : "WholeChain"}</Title>
                </View>
                    {/* <Subtitle>{this.props.subTitle!==undefined ? this.props.subTitle : ""}</Subtitle> */}
                   <View 
                    style={{ flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',  alignItems: 'center'}}>
                        <View><Icon type="FontAwesome" name="user-circle" style={{fontSize: 80,   color: '#fff'}} /></View>
                        <View>
                            <Title>Ben Blakey</Title>
                            <Subtitle style={{width:150}}>Northline Seafoods LLC</Subtitle>
                        </View>
                   </View>
                 <Right>
                    <Button transparent>
                        <Icon type = "MaterialCommunityIcons" name = "account-plus" style = {{color:"#FFF",fontSize:24}} />
                    </Button>
                 </Right>
             </Header>
              
         )
     }
}
