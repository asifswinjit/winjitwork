import React, { Component } from 'react'

import { Appbar, Button} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SignUpHeader extends Component
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
                    icon={()=><MaterialIcons name="arrow-back" color="#FFF" size={28}/>}
                   // onPress={() => this.props.closeButtonAction(2,'default','default')} 
                />
             <Appbar.Content
               title={this.props.title!==undefined ? this.props.title : "Signup"}
            //    subtitle="Subtitle"
             />
             
           </Appbar.Header>
              
         )
     }
}
