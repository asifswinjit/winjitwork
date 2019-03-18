import React , { Component } from 'react'

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
 
import { StyleProvider } from 'native-base'

import { Router, Scene, Stack} from 'react-native-router-flux'
import { connect } from 'react-redux';
import Splash from './containers/Splash'
import SwiperScreen from './containers/SwiperScreen'
import Login from './containers/Login'
import FooterTabContainer from './containers/FooterTabContainer'
import SingUp from './containers/SingUp'
import Test from './containers/Test'
 import SingupUserProfile from './containers/signupprocess/UserProfile'
 import SingupCompanyProfile from './containers/signupprocess/CompanyProfile'
 import SingupProductInfo from './containers/signupprocess/ProductInfo'

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { firebaseConfig } from './app.config'
import firebase from 'firebase';

const RouterWithRedux = connect()(Router);

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4051b5',
       
    },
  };

export default class Root extends Component
{
    constructor(props)
    {
        super(props);
        
        console.ignoredYellowBox= ['Setting a timer'];
    }
    componentWillMount()
    {
        firebase.initializeApp(firebaseConfig);
    }
    render()
    {
        return(
            <StyleProvider style={getTheme(material)}>
                <PaperProvider theme={theme}>
                    <RouterWithRedux>
                        <Stack hideNavBar key='root'>
                        
                        <Scene key='splash' title='Splash' component={Splash}  initial={true}/>
                        <Scene key='swiperscreen' title='WholeChain' component={SwiperScreen} />
                        <Scene key='login' title='Login' component={Login} />
                        <Scene key='tabcontainer' title='TabContainer' component={FooterTabContainer} />
                        <Scene key='signup' title='Sign Up' component={SingUp} />
                        <Scene key='test' title='Test' component={Test} />
                      
                        <Scene key='signupuserprofile' title='signupuserprofile' component={SingupUserProfile} />
                        <Scene key='signupcompanyprofile' title='signupcompanyprofile' component={SingupCompanyProfile} />
                        <Scene key='signupproductinfo' title='signupcompanyprofile' component={SingupProductInfo} />
 
                        {/* <Scene key='companyprofile' title='Company Profile' component={CompanyProfile}/>
                        <Scene key='settings' title='Settings' component={Settings}/>
                        <Scene key='mycontacts' title='My Contacts' component={MyContacts}/> */}
                        </Stack>
                    </RouterWithRedux>
                </PaperProvider>
          </StyleProvider>
        )
    }
}