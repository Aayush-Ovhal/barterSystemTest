import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Welcome from './screens/welcome';
import Home from './screens/homeScreen';
import Exchange from './screens/exchangeScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  Welcome: {screen: Welcome},
  Home: {screen: Home},
  Exchange: {screen: Exchange}
})

const AppContainer = createAppContainer(switchNavigator)