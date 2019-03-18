import React, { Component } from 'react'

import { Appbar, IconButton} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class VerifyHeader extends Component
{
    constructor(props)
    {
        super(props)
    }
     render()
     {

         return(
             
              <Appbar.Header>
           
               <Appbar.Content
               title={this.props.title!==undefined ? this.props.title : "WholeChain"}
           
             />
            <IconButton
                icon={()=> <MaterialCommunityIcons name="qrcode-scan" color="#FFF" size={28}/>}  
                color="#fff"
                size={20}
                onPress={() => this.props.showQRCode(true)}
            />
           </Appbar.Header>
              
         )
     }
}
