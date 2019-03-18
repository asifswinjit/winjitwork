import React, { Component } from 'react'
import {    Text, Left, Right, Body,Thumbnail, 
    Title, Subtitle,Footer, Content,Item, Picker
} from 'native-base'
import { List,Button  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Image} from 'react-native';
import { StyleSheet } from 'react-native'

const qrcodeIcon = require('../../images/qrcode.png')
class RecordDetails extends Component {
    
    constructor(props)
    {
        super(props);
    }
    render()
{
    return(
        <Content>
        <View style={{marginTop: 22 , justifyContent:'center',alignContent:'center',alignItems:'center'}}>
             <View>
                 <Image source={qrcodeIcon} /> 
              </View>
            <View style={{paddingBottom:15}}>
                <Title>Northline Seafoods</Title>
                <Subtitle style={{color:'#000'}}>Sockeye Salmon</Subtitle>
                <Subtitle style={{color:'#000'}}>09178546543459097</Subtitle>
            </View>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <View style={styles.circleRoundGrey}>
                    <Text style={styles.labelInCircle}>JF</Text>
                </View>
                <Icon name="long-arrow-right" size={16}/>
                <View style={styles.circleRoundBlue}>
                    <Text style={styles.labelInCircle}>SG</Text>
                </View>
                <Icon name="long-arrow-right" size={16}/>
                <View style={styles.circleRoundGrey}>
                    <Text style={styles.labelInCircle}>AS</Text>
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
               
           <View style={{justifyContent:'flex-end',flexDirection:'row', alignItems:'center',padding:20}}>
                <Button
                 style={{borderWidth:1,borderColor:'#3f51b5',borderRadius:2}}
                 onPress={() => {
                 this.props.onBackAction(0,'default','default')
                }}> Trash </Button> 

                <Button  mode="contained" 
                 style={{ marginLeft : 10,borderRadius:2}}
                 onPress={() => {
                 this.props.onBackAction(0,'default','default')
                }}> Accept </Button> 
           </View>
             
        </View>
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
export default RecordDetails;