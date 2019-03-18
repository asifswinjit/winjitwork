import React, { Component } from 'react'
import {Fab,Icon} from 'native-base'

class FabButton extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <Fab
            //active={this.state.active}
            containerStyle={{bottom:70 }}
            style={{ backgroundColor: '#4051b5',  }}
            position="bottomRight"
             
            // onPress = {() => this.setState({active : !this.state.active})}
            >
                <Icon type="MaterialIcons" name="add" />
            </Fab>
        )
    }
}
export default FabButton;