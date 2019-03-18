import React from 'react';
import { View, ActivityIndicator } from 'react-native';
 

const LoaderWindow = () => {
  return(
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
    <ActivityIndicator size="large" color='#3f51b5' />
  </View>
  )
}

export default LoaderWindow;
