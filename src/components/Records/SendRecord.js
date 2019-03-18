import { Searchbar } from 'react-native-paper';
import React, { Component } from 'react'
import {    Text, Left, Right, Body,Thumbnail, 
    Header, Footer, Content,Item, Picker
} from 'native-base'
import { List,Button,Title,Portal,Dialog,Paragraph  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableHighlight, View, Alert, Image} from 'react-native';
import { StyleSheet } from 'react-native'
const UserContactIcon = require('../../images/user_contact.png')
const qrcodeIcon = require('../../images/qrcode.png')
class SendRecord extends Component
{
    constructor(props)
    {
        super(props)
        this.state = { 
            active:false,
            modalVisible: false,
            searchQuery:''
         }
    }

     
    render()
    {
      
        const SendRecComponent = <View>
           <Portal>
          <Dialog
             visible={this.state.modalVisible}
             onDismiss={()=>this.setState({modalVisible:false})}>
            <Dialog.Title>Confirm record transfer?</Dialog.Title>
            <Dialog.Content>
              <Paragraph style={styles.paragraph}>Are you sure you want to send the following record to John Doe?</Paragraph>
              <Title>Sockeye Salmon</Title>
              <Paragraph style={styles.paragraph}>20,000 LBS</Paragraph>
              <Paragraph style={styles.paragraph}>091876529007658321</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
            <Button onPress={()=>this.setState({modalVisible:false})}>CANCEL</Button>
              <Button mode='contained' onPress={()=>this.setState({modalVisible:false})}>SEND</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
             <Searchbar
                placeholder="Enter name, phone or email"
                onChangeText={query => { this.setState({ searchQuery: query }); }}
                value={this.state.searchQuery}
            />
        <List.Section >
        <List.Item 
            left={()=><Text style={{color:'#000',fontSize:18}}>Frequent</Text>}
        />
        <List.Item
            onPress={() => this.setState({ modalVisible: true})}
            title="John Doe"
            description="Northline Seafood"
            left={props => <Icon {...props} size={48}  color='#9b9b9b' name="account-circle" />}
        />
        <List.Item
         onPress={() => this.setState({ modalVisible: true})}
         //theme={{ colors :{color:'#00F',text:'#F00'}}}
            title="Humphrey Bogart"
            description="Rick's Seafood"
            left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
        />
        <List.Item
            onPress={() => this.setState({ modalVisible: true})}
            title="Vin Deisel"
            description="Deisel Seafoods"
            left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
        />
    </List.Section>
    <List.Section >
    <List.Item 
            left={()=><Text style={{color:'#000',fontSize:18}}>A</Text>}
        />
        <List.Item
            title="Allen Quartzmen"
            description="Solo Seafoods"
            left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
        />
        <List.Item
            title="Scott Adkins"
            description="Star Fisheries"
            left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
        />
    </List.Section>
   </View>
        
       return(
            <Content>
              {SendRecComponent}
            </Content>
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
        fontSize:14,
    },
    ListHead:{
        borderWidth:1,
    },
    modalListHead:{
        color:'#9b9b9b'
    },
    listSection:{
        fontSize:40,
        color:'#000',
    },
    paragraph:{
        fontSize:20
    }
  });
export default SendRecord;