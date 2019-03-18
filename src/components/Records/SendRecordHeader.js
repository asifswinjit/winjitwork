import React, { Component } from 'react'

import { Appbar, IconButton} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class SendRecordHeader extends Component
{
    constructor(props)
    {
        super(props)
    }
     render()
     {

         return(
             
              <Appbar.Header>
             {/* <Appbar.BackAction
               onPress={this._goBack}
             /> */}
              <Appbar.Action icon="close" onPress={() => this.props.closeButtonAction(1,'default','default')} />
              <Appbar.Content
               title={this.props.title!==undefined ? this.props.title : "WholeChain"}
            //    subtitle="Subtitle"
             />
            <IconButton
              // type = "MaterialCommunityIcons" name = "account-plus"
                icon={()=> <MaterialCommunityIcons name="account-plus" color="#FFF" size={28}/>}  
                color="#fff"
                size={20}
                onPress={() => console.log('Pressed')}
            />
           </Appbar.Header>
              
         )
     }
}
