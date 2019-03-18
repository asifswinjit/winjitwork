import React, { Component } from 'react'
import { List, ListItem, Text } from 'native-base'
import { StyleSheet } from 'react-native'
class SettingsComponent extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
       return(
        <List>
            <ListItem itemDivider  style={styles.ListHead}>
                <Text style={styles.ItemHead}>Account</Text>
            </ListItem>  

            <ListItem  onPress={() =>  this.props.onAction(2,'TopHeader','myprofile') }>
                <Text style={styles.Item}>My profile</Text>
            </ListItem>

            <ListItem onPress={() =>  this.props.onAction(2,'TopHeader','companyprofile') }>
                <Text style={styles.Item}>Company profile</Text>
            </ListItem>

            <ListItem onPress={() =>  this.props.onAction(2,'TopHeader','mycontacts') }>
                <Text  style={styles.Item}>My contacts</Text>
            </ListItem>  

            <ListItem>
                <Text  style={styles.Item}>Invite a contact</Text>
            </ListItem>

            <ListItem itemDivider style={styles.ListHead}>
                <Text style={ styles.ItemHead}>Support</Text>
            </ListItem>

            <ListItem>
                <Text style={styles.Item}>Change password</Text>
            </ListItem>
            
            <ListItem>
                <Text style={styles.Item}>Help &amp; feedback</Text>
            </ListItem>

            <ListItem>
                <Text style={styles.Item}>Logout</Text>
            </ListItem>  
            <ListItem style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.version}>Version 0.9</Text>
            </ListItem>
        </List>
       )
    }

}
const styles =  StyleSheet.create({
    Item: {
     color:'#9b9b9b',
     fontSize:16,
    },
    ItemHead:{
        color:'#9b9b9b',
        fontSize:20,
    },
    ListHead:{
        borderWidth:1,
        backgroundColor:"#FAFAFA",
    },
    version:{
        backgroundColor:"#FAFAFA",
        color:'#9b9b9b',
        textAlign: 'center',
        justifyContent: 'center', 
alignItems: 'center'
    }
  });
export default SettingsComponent;