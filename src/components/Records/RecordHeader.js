

import React, { Component } from 'react'
import { Left, Right, Text , Header, Button,  Body, Title, Item, Picker,Icon,InputGroup,Input } from 'native-base'
import { DEVICE_WIDTH } from '../../app.config'
export default class RecordHeader extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            selected2: undefined
          };
    }

    onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }

     render()
     {

         return(
             
             <Header>
                
                <Body>
                <Item picker style={{marginLeft:0,paddingLeft:0, borderBottomColor:'#4051b5',color:'#fff',width:(DEVICE_WIDTH*0.35)}}>
                    <Picker
                    style={{color:'#fff' }}
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#fff", fontSize: 25 }} />}
                    placeholder="All Records"
                    placeholderStyle={{ color: "#FFF" }}
                    placeholderIconColor="#FFF"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                    >
                        <Picker.Item label="All Records" value={0}/>
                        <Picker.Item label="Sent Records" value={1} />
                        <Picker.Item label="Confirmed Records" value={2} />
                    </Picker>
                </Item>
                </Body>
                 <Right>
                 <InputGroup>
                       <Input  style={{marginLeft:20,paddingLeft:20}}  />
                        <Icon type="MaterialIcons" name='search' style={{color:"#fff"}} />
                    </InputGroup>
                 </Right>
                 {/* <Right>
                     <Icon type="MaterialIcons" name='search' style={{color:"#fff"}}/>
                 </Right> */}
             </Header>
              
         )
     }
}
