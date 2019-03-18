import React, { Component } from 'react';
import { Container,   Content, Footer, FooterTab, Button, Icon, Text,Fab } from 'native-base';
 
import TopHeader from '../components/HeaderTop'
import MyContactHeader from '../components/settings/MyContactHeader'
import RecordHeader from '../components/Records/RecordHeader'
import SendRecordHeader from'../components/Records/SendRecordHeader'
import SettingsHeaderTop from '../components/SettingsHeader'
import SettingsComponent from '../components/settings/SettingsComponent'
import RecordsComponent from '../components/RecordsComponent'

import VerifyComponent from '../components/Verify/VerifyComponent'
import VerifyHeader from '../components/Verify/VerifyHeader'
import CompanyProfile from '../components/settings/CompanyProfile'
import MyProfile from '../components/settings/MyProfile'
import MyContacts from '../components/settings/MyContact'
//Records Tab Components
import AllRecords from '../components/Records/AllRecords'
import FabButton from '../components/Records/FabButton'
import SendRecord from '../components/Records/SendRecord';

import RecordDetailsHeader from '../components/Records/RecordDetailsHeader'
import RecordDetails from '../components/Records/RecordDetails'

export default class FooterTabContainer extends Component {
  
  constructor(props)
  {
    super(props);
    this.state = { tabIndex:2,
      componentName:'settings',
      headerName:'settingheader',
      showscanCodeModal:false,
    }
  }
 
   
  changeComponent = (index,  header,comp)=>
  {
    
     this.setState({
       tabIndex:index,
       componentName:comp,
       headerName:header,
     
      })
     
  }
  showQRCodePopUp = (qrCodeModalVisible) =>
  {
    this.setState({
      showscanCodeModal:qrCodeModalVisible
    })
  }
  render() {
    
    let currentHeader =  <SettingsHeaderTop title="Settings"/>
    let currentComponent =  <SettingsComponent onAction = {this.changeComponent} />
    let fabButton = ''
    if(this.state.tabIndex===0)
    {
       switch(this.state.componentName)
       {
         case 'recorddetails':
          currentHeader =  <RecordDetailsHeader onBackAction = { this.changeComponent } title="Record Details" />
          currentComponent =  <RecordDetails onBackAction = { this.changeComponent }  />
         break;
         default:
          currentHeader =  <VerifyHeader showQRCode = { this.showQRCodePopUp } title="Verify" />
          currentComponent =  <VerifyComponent   onItemPressAction = { this.changeComponent } showQRCode = { this.showQRCodePopUp } isQRModalVisible = { this.state.showscanCodeModal} />
         break;
       }
    }else if(this.state.tabIndex===1)
    {
       
       switch(this.state.componentName)
       {
         case 'sendrecord':
           currentHeader =  <SendRecordHeader title="Send record" closeButtonAction = {this.changeComponent}/>
           currentComponent =  <SendRecord onAction = {this.changeComponent} />
         break;
         default:
          currentHeader =  <RecordHeader title="Records" closeButtonAction = {this.changeComponent}/>
          currentComponent =  <AllRecords onAction = {this.changeComponent} />
          fabButton = <FabButton/>
         break;
       }
    }else if(this.state.tabIndex===2)
    {
      switch(this.state.componentName)
      {
        case 'companyprofile':
          currentHeader =  <TopHeader title="Company profile" closeButtonAction = {this.changeComponent}/>
          currentComponent =  <CompanyProfile/>
        
        break;
        case 'myprofile':
         
          currentHeader =  <TopHeader title="My profile" closeButtonAction = {this.changeComponent}/>
          currentComponent =  <MyProfile/>
        break;
        case 'mycontacts':
          currentHeader =  <MyContactHeader title="My contacts" closeButtonAction = {this.changeComponent}/>
          currentComponent =  <MyContacts/>
        break;
        default:
         
          currentHeader =  <SettingsHeaderTop title="Settings"/>
          currentComponent =  <SettingsComponent onAction = {this.changeComponent} />
          break;
      }
       }
    return (
      <Container>
         {/* <TopHeader title="Header"/> */}
         
         { currentHeader }
        <Content>
         
          { currentComponent }
        </Content>
        {fabButton!=='' ? fabButton : undefined}
        <Footer style={{borderTopWidth:1, borderColor:'#9b9b9b'}}>
          <FooterTab>
            <Button vertical  active={ this.state.tabIndex===0? true:false }  onPress={(e) => this.setState({tabIndex:0})}>
              <Icon type="MaterialIcons" name="playlist-add-check"  active={ this.state.tabIndex===0 ? true:false }  onPress={(e) => this.setState({tabIndex:0})} />
              <Text uppercase={false}>Verify</Text>
            </Button>
            <Button vertical  active={ this.state.tabIndex===1? true:false }  onPress={(e) => this.setState({tabIndex:1})}>
              <Icon type="MaterialIcons" name="format-list-bulleted"   active={ this.state.tabIndex===1? true:false }  onPress={(e) => this.setState({tabIndex:1})} />
              <Text uppercase={false}>Records</Text>
            </Button>
            <Button vertical active={ this.state.tabIndex===2? true:false }  onPress={(e) => this.setState({tabIndex:2})}>
              <Icon type="MaterialIcons" active name="settings" active={ this.state.tabIndex===2? true:false }  onPress={(e) => this.setState({tabIndex:2})} />
              <Text uppercase={false}>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}