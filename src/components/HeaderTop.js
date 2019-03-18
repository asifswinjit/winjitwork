import React, { Component } from 'react'

import { Appbar, Button} from 'react-native-paper';

export default class HeaderTop extends Component
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
              <Appbar.Action icon="close" onPress={() => this.props.closeButtonAction(2,'default','default')} />
             <Appbar.Content
               title={this.props.title!==undefined ? this.props.title : "WholeChain"}
            //    subtitle="Subtitle"
             />
             <Button>SAVE</Button>
           </Appbar.Header>
              
         )
     }
}
