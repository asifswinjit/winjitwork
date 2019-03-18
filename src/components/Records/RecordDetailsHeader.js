import React, { Component } from 'react'

import { Appbar, Button, IconButton} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default class RecordDetailsHeader extends Component
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
              <Appbar.Action 
                icon={()=> <MaterialIcons name="arrow-back" color="#FFF" size={28}/>}  
                onPress={() => this.props.onBackAction(0,'default','default')} />
             <Appbar.Content
               title={this.props.title!==undefined ? this.props.title : "WholeChain"}
            //    subtitle="Subtitle"
             />
           
             <IconButton
              // type = "MaterialCommunityIcons" name = "account-plus"
                icon={()=> <MaterialIcons name="check" color="#FFF" size={28}/>}  
                color="#fff"
                size={20}
                onPress={() => this.props.onBackAction(0,'default','default')}
            />
           </Appbar.Header>
              
         )
     }
}
