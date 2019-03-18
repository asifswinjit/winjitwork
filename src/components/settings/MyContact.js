import React, { Component } from 'react'
import {  ListItem, Text, Left, Right, Body,Thumbnail, Content } from 'native-base'
import { StyleSheet } from 'react-native'
import { List  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
const UserContactIcon = require('../../images/user_contact.png')
class MyContacts extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
       return(
       <Content>
            <List.Section title="D">
            <List.Item
                title="John Doe"
                description="Doe's Crab Shack"
                left={props => <Icon {...props} size={48}  color='#9b9b9b' name="account-circle" />}
            />
            <List.Item
                title="Jane Doe"
                description="Doe's Crab Shack"
                left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
            />
        </List.Section>
        <List.Section title="E">
            <List.Item
                title="John Edwards"
                description="Edwards Seafood"
                left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
            />
            <List.Item
                title="Jane Edwards"
                description="Edwards Seafood"
                left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
            />
        </List.Section>
       </Content>
        // <List>
        //     <ListItem itemDivider>
        //         <Text style={styles.ItemHead}>D</Text>
        //     </ListItem>                    
        //     <ListItem avatar>
        //         <Left>
        //             <Thumbnail source={UserContactIcon} />
        //         </Left>
        //         <Body>
        //             <Text>John Doe</Text>
        //             <Text note>Doe's Crab Shack</Text>
        //         </Body>
        //         {/* <Right>
        //             <Text note>3:43 pm</Text>
        //         </Right> */}
        //     </ListItem>
        //     <ListItem avatar>
        //         <Left>
        //             <Thumbnail source={UserContactIcon} />
        //         </Left>
        //         <Body>
        //             <Text>Jane Doe</Text>
        //             <Text note>Doe's Crab Shack</Text>
        //         </Body>
        //     </ListItem>
        //     <ListItem itemDivider>
        //         <Text style={styles.ItemHead}>E</Text>
        //     </ListItem>                    
        //     <ListItem avatar>
        //         <Left>
        //             <Thumbnail source={UserContactIcon} />
        //         </Left>
        //         <Body>
        //             <Text>John Edwards</Text>
        //             <Text note>Edwards Seafood</Text>
        //         </Body>
        //         {/* <Right>
        //             <Text note>3:43 pm</Text>
        //         </Right> */}
        //     </ListItem>
        //     <ListItem avatar>
        //         <Left>
        //             <Thumbnail source={UserContactIcon} />
        //         </Left>
        //         <Body>
        //             <Text>Jane Edwards</Text>
        //             <Text note>Edwards Seafood</Text>
        //         </Body>
        //     </ListItem>
        // </List>
       )
    }

}
const styles =  StyleSheet.create({
    Item: {
     color:'#9b9b9b',
     fontSize:16,
    },
    ItemHead:{
        color:'#000',
        fontSize:20,
        fontWeight:'bold',
    },
    ListHead:{
        borderWidth:1,
    }
  });
export default MyContacts;