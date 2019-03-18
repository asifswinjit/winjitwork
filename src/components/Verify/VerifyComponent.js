import React, { Component } from 'react'
import {  StyleSheet } from 'react-native';
 
import { Modal,  View,  Image,TouchableOpacity, Linking, Dimensions } from 'react-native'
import { Left, Right, Body, 
    Header, Title, Subtitle, Content, } from 'native-base'

import { List, Text,Paragraph, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCodeScanner from 'react-native-qrcode-scanner';


const scanQRCodeImage = require('../../images/scanqr.png')
class VerifyComponent extends Component
{
    constructor(props)
    {
        super(props);
        //this.state ={ openCamera:false }
        this.closeButtonPress = this.closeButtonPress.bind(this);
    }

    onSuccess(e) {
        Linking
          .openURL(e.data)
          .catch(err => console.error('An error occured', err));
      }

      closeButtonPress() {
          alert("pressed")
        this.props.showQRCode(false);
       // this.setState({ openCamera:false})
      }

    render()
    {
        let scannerView = <QRCodeScanner
                    onRead={this.onSuccess.bind(this)}
                     containerStyle = { styles.cameraContainer }
                     cameraStyle = { styles.cameraContainer }
                     //showMarker = { true }
                />
                
        
        const modalView =   
        <View>
            <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.isQRModalVisible ? this.props.isQRModalVisible:false}
            onRequestClose={() => {
                //Alert.alert('Modal has been closed.');
            }}>
            <Header>
                <Left>
                    <TouchableOpacity
                            onPress = {() => {
                                this.props.showQRCode(false);
                                this.setState({ openCamera:false})
                            }}
                            style={{ marginLeft:15}}
                        >
                            <Icon size={28} color="#FFF" type= "MaterialIcons" name='close' />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Title>Scan Record</Title>
                </Body>
            </Header>
            <Content>
                <View style={{ flex:1, marginTop:'20%',height:400, justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                    <View>
                         {scannerView}
                    </View>
                </View>
            </Content>
        </Modal>
        </View>

        return(
            <Content>
                { modalView }
                <List.Item
                    title="Northline Seafoods"
                    description={<Paragraph><Text>Sockeye Salmon -2488</Text>{'\n'}<Text>20,000 LBS </Text></Paragraph>}
                    left={props => <Icon {...props} size={48}  color='#9b9b9b' name="account-circle" />}
                    right = { () => <Text style={styles.dateStyle}>Jan 27</Text> }
                    onPress = {() => this.props.onItemPressAction(0,'recorddetails','recorddetails') }
               />
                <List.Item
                    title="PT Thai Union Thailand"
                    description={<Paragraph><Text>White Shrimp - 1848</Text>{'\n'}<Text>25,000 LBS </Text></Paragraph>}
                    left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
                    right = { () => <Text style={styles.dateStyle}>Jan 10</Text> }
                />
            
                <List.Item
                    title="Hudson Valley Fish Farm"
                    description={<Paragraph><Text>Steelhead Trout - 1473 </Text>{'\n'}<Text>10,000 LBS </Text></Paragraph>}
                    left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
                    right = { () => <Text style={styles.dateStyle}>Jan 5</Text> }
                />
                <List.Item
                    title="Thai Union Fishing Group"
                    description={<Paragraph><Text>White Shrimp - 2583 </Text>{'\n'}<Text>30,000 LBS </Text></Paragraph>}
                    left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
                    right = { () => <Text style={styles.dateStyle}>Dec 2</Text> }
                />
                <List.Item
                    title="Hudson Valley Fish Farm"
                    description={<Paragraph><Text>Steelhead Trout - 2825</Text>{'\n'}<Text>35,000 LBS </Text></Paragraph>}
                    left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
                    right = { () => <Text style={styles.dateStyle}>Dec 5</Text> }
                />
                 <List.Item
                    title="Hudson Valley Fish Farm"
                    description={<Paragraph><Text>Steelhead Trout - 2825</Text>{'\n'}<Text>35,000 LBS </Text></Paragraph>}
                    left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
                    right = { () => <Text style={styles.dateStyle}>Dec 5</Text> }
                />
                 <List.Item
                    title="Hudson Valley Fish Farm"
                    description={<Paragraph><Text>Steelhead Trout - 2825</Text>{'\n'}<Text>35,000 LBS </Text></Paragraph>}
                    left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
                    right = { () => <Text style={styles.dateStyle}>Dec 5</Text> }
                />
                 <List.Item
                    title="Hudson Valley Fish Farm"
                    description={<Paragraph><Text>Steelhead Trout - 2825</Text>{'\n'}<Text>35,000 LBS </Text></Paragraph>}
                    left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
                    right = { () => <Text style={styles.dateStyle}>Dec 5</Text> }
                />
                 <List.Item
                    title="Hudson Valley Fish Farm"
                    description={<Paragraph><Text>Steelhead Trout - 2825</Text>{'\n'}<Text>35,000 LBS </Text></Paragraph>}
                    left={props => <Icon {...props} size={48} color='#9b9b9b' name="account-circle" />}
                    right = { () => <Text style={styles.dateStyle}>Dec 5</Text> }
                />
            </Content>
        )
    }
}

const styles =  StyleSheet.create({
    dateStyle:{
        marginTop:5,
        color:'#9b9b9b',
        fontSize:16,
        paddingRight:5,
    },
    buttonTouchable: {
        padding: 16,
      },
      cameraContainer:{
        width: (Dimensions.get('window').width),
        height: (Dimensions.get('window').width),
    }
});
export default VerifyComponent;