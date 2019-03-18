import React, { Component } from 'react'
import {    Text, Left, Right, Body,Thumbnail, 
    Header, Title, Subtitle,Footer, Content,Item, Picker
} from 'native-base'
import { List,Button  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Modal, TouchableHighlight, View, Alert, Image} from 'react-native';
import { StyleSheet } from 'react-native'
const UserContactIcon = require('../../images/user_contact.png')
const qrcodeIcon = require('../../images/qrcode.png')
class AllRecords extends Component
{
    constructor(props)
    {
        super(props)
        this.state = { 
            active:false,
            modalVisible: false,
         }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

 goToSendRecordComponent()
 {
    this.setModalVisible(!this.state.modalVisible);
    this.props.onAction(1,'sendrecord','sendrecord');
 }
    render()
    {
        const modalView =  <View style={{marginTop: 22}}>
        <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
            //Alert.alert('Modal has been closed.');
        }}>
        <Header>
            <Left>
                <Button transparent onPress={() => this.setModalVisible(false)}>
                        <Icon size={28} color="#FFF" type= "MaterialIcons" name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title>Record details</Title>
            </Body>
            <Right>
                <Button transparent onPress={() => this.setModalVisible(false)}>
                        <Icon size={28} color="#FFF" type= "MaterialIcons" name='send' />
                </Button>
            </Right>
        </Header>
      <Content>
        <View style={{marginTop: 22 , justifyContent:'center',alignContent:'center',alignItems:'center'}}>
             <View>
                 <Image source={qrcodeIcon} /> 
              </View>
            <View style={{paddingBottom:15}}>
                <Title>Northline Seafoods</Title>
                <Subtitle style={{color:'#000'}}>Sockeye Salmon</Subtitle>
                <Subtitle style={{color:'#000'}}>0917854654345909</Subtitle>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <View style={styles.circleRoundGrey}>
                    <Text style={styles.labelInCircle}>JF</Text>
                </View>
                <FontAwesome name="long-arrow-right" size={16}/>
                <View style={styles.circleRoundBlue}>
                    <Text style={styles.labelInCircle}>SG</Text>
                </View>
                <FontAwesome name="long-arrow-right" size={16}/>
                <View style={styles.circleRoundGrey}>
                    <Text style={styles.labelInCircle}>AS</Text>
                </View>
            </View>
            </View>
        <View style={{paddingLeft:10,paddingRight:10}}>
            <List.Section>
                <List.Item 
                    left= {() => <Text style={styles.leftText}>Species</Text>} 
                    right={() => <Text>Sockeye Salmon</Text>}
                />
                <List.Item 
                     left= {() => <Text style={styles.leftText}>Weight</Text>}
                     right={() => <Text>23,000 LBS</Text>}
                    />
                <List.Item 
                    left= {() => <Text style={styles.leftText}>Company</Text>}
                    right={() => <Text>Northline Seafoods LLC Bennet</Text>}
                    />
                <List.Item  
                left= {() => <Text style={styles.leftText}>Date Received</Text>}
                right={() => <Text>January 11, 2019</Text>} />
                <List.Item 
                    left= {() => <Text style={styles.leftText}>Harvester</Text>}
                    right={() => <Text>Joe Fisher</Text>} />
                <List.Item 
                    left= {() => <Text style={styles.leftText}>Vessel Number</Text>}
                    right={() => <Text>2422239800876</Text>} />
                <List.Item 
                    left= {() => <Text style={styles.leftText}>FOA Fishing Area</Text>}
                    right={() => <Text>68</Text>} />
                <List.Item  
                    left= {() => <Text style={styles.leftText}>Catch Method</Text>}
                   right={() => <Text>Midwater Trawl</Text>}
                />
                <List.Item 
                    left= {() => <Text style={styles.leftText}>Permit Number</Text>}
                   right={() => <Text>122HHErY12f2CK89</Text>}
                    />
                <List.Item 
                    left= {() => <Text style={styles.leftText}>Certifications</Text>}  
                    right={() => <Text> MSC</Text>}
                    />
            </List.Section>
               
           <View style={{justifyContent:'center',alignItems:'center',padding:20}}>
                <Button  mode="contained" style={{width:200,borderRadius:3,padding:5}}  onPress={() => {
                this.goToSendRecordComponent();
                }}> SEND RECORD </Button> 
           </View>
             
        </View>
      </Content>
      
                   
    
        </Modal>
     </View>
        const tempComp = <View style={{paddingTop:0,marginTop:0}}>
        <List.Section >
        <List.Item
        style={{paddingTop:0,marginTop:0,paddingBottom:0}}
        left={()=> <Text style={{fontSize:18}}>January 2019</Text>}
        />
        <List.Item
            onPress={() => {
                this.setModalVisible(true);
            }}
            title="Northline Seafoods"
            description="Sockeye Salmon -2488"
            left={props => <Icon {...props} size={48}  color='#9b9b9b' name="account-circle" />}
        />
        <List.Item
            title="PT Thai Union Thailand"
            description="White Shrimp - 1848"
            left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
        />
        <List.Item
            title="Hudson Valley Fish Farm"
            description="Steelhead Trout - 1473"
            left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
        />
    </List.Section>
    <List.Section>
        <List.Item
        left={()=> <Text style={{fontSize:18}}>December 2018</Text>}
        style={{paddingTop:0,marginTop:0,paddingBottom:0}}
        />
        <List.Item
            title="Northline Seafoods"
            description="Sockeye Salmon- 4885"
            left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
        />
        <List.Item
            title="Thai Union Fishing group"
            description="White Shrimp - 2538"
            left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
        />
    </List.Section>
   </View>
        
       return(
            <Content>
              {modalView}
              {tempComp}
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
        paddingTop:0,
        marginTop:0,
    },
    leftText:{
        color:"#9b9b9b",
        fontSize:16,
    },
    circleRoundGrey:{
        backgroundColor:'#9b9b9b',
        borderRadius:20,
        width:40,
        height:40,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
    },
    circleRoundBlue:{
        backgroundColor:'#3f51b5',
        borderRadius:20,
        width:40,
        height:40,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
    },
    labelInCircle: {
        color:'#fff',
        textAlign:'center',
    }
  });
export default AllRecords;