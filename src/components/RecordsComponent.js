import React, { Component } from 'react'
import { Text, View } from 'native-base';

class RecordsComponent extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <View style={{flex:1,justifyContent:'center'}}>
                <View>
                    <Text>This is Demo Component for Records tab</Text>
                </View>
            </View>
        )
    }
}

export default RecordsComponent;