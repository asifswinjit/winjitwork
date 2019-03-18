import React, { Component } from 'react'
 
import { Content, View } from 'native-base' 
import { TextInput, Button } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
//Import Actions
import { getCurrentUser } from '../../actions/profile_action'
 

class MyProfile extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            emailId:'',
            contact:'',
            country:'',
            license:'',
            initiated:false,
        }
        this.props.getCurrentUser()
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log("nextProps =",nextProps)
        console.log("prevState =",prevState)
        var  stateObj = prevState;
        if((!prevState.emailId || !prevState.contact || !prevState.firstname|| !prevState.lastname)  &&  nextProps.userProfile!==undefined)
        {
            stateObj.emailId = nextProps.userProfile.data.email
            stateObj.contact = nextProps.userProfile.data.phNumber
            stateObj.firstname = nextProps.userProfile.data.firstName
            stateObj.lastname = nextProps.userProfile.data.lastName
 
            
        }
       
        if(prevState === stateObj)
        {
            console.log("Prev State === StateObj")
            return null
        }
        return stateObj;
    }

    
    componentDidMount(){
        console.log(" DID MOUNT")        
    }
    componentDidUpdate()
    {
        console.log(" DID UPDATE")
        if(this.props.userProfile!==undefined && !this.state.initiated)
        {
            this.setState({initiated:true})
        }
    }
    render()
    { let dropDwonData = [{
        value: 'U.S.A.',
      }, {
        value: 'India',
      }, {
        value: 'China',
      }];
      console.log("STATE =",this.state)
        return(
            <Content padder>
                <View>
                    <View style={{marginTop:10}}>
                        <TextInput
                                theme={{colors:{background:'#efefef',placeholder:'#a3a3a3'}}}
                                label='First name'
                                placeholder="First name"
                                value={this.state.firstname}
                                onChangeText={firstname => this.setState({ firstname })}
                                keyboardType='default'
                                mode='outlined'
                            />
                    </View>
                    <View style={{marginTop:10}}>
                        <TextInput
                                theme={{colors:{background:'#efefef',placeholder:'#a3a3a3'}}}
                                label='Last name'
                                placeholder="Last name"
                                value={this.state.lastname}
                                onChangeText={lastname => this.setState({ lastname })}
                                keyboardType='default'
                                mode='outlined'
                            />
                    </View>
                    <View style={{marginTop:10}}>
                            <TextInput
                                theme={{colors:{background:'#efefef',placeholder:'#a3a3a3'}}}
                                label='Email'
                                placeholder="Email address"
                                value={this.state.emailId}
                                onChangeText={emailId => this.setState({ emailId })}
                                keyboardType='email-address'
                                mode='outlined'
                                disabled = {true}
                            />
                    </View>
                    <View style={{marginTop:10}}>
                            <TextInput
                                theme={{colors:{background:'#efefef',placeholder:'#a3a3a3'}}}
                                label='Phone number'
                                value={this.state.contact}
                                onChangeText={contact => this.setState({ contact })}
                                keyboardType='number-pad'
                                mode='outlined'
                                
                                
                            />
                         
                    </View>
                    <View style={{marginTop:10}}>
                        <Dropdown
                            label='Country'
                            data={dropDwonData}
                            inputContainerStyle={{ borderBottomColor: 'transparent', }}
                            containerStyle={{borderRadius:5,padding:0,borderColor:'#9b9b9b',borderWidth:1,paddingLeft:5}}
                            dropdownOffset={{ top: 15,left:5 }}
                            
                        />
                    </View>
                    <View style={{marginTop:10}}>
                        <TextInput
                            label='License / permit number'
                            placeholder="License/ permit number"
                            value={this.state.license}
                            onChangeText={license => this.setState({ license })}
                            keyboardType='default'
                            mode='outlined'
                        />
                    </View>
                </View>
            </Content>
        )
    }
}
const styles = StyleSheet.create({
 
})


const mapStateToProps = state => ({
    userProfile: state.profile.userprofile || undefined,
    isLoading: state.status.loading || false,
  });
  
  const mapDispatchToProps = {
    getCurrentUser
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
 