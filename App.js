
import React, { Component } from 'react';
import { Platform, StyleSheet, Text,StatusBar, View, AsyncStorage, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/index';
import firebaseConfig from './Services/firebase';
import firebase from 'firebase';
import Routes from './src/routes';

//import { composeWithDevTools } from 'remote-redux-devtools';
//const compose = composeWithDevTools({ realtime: true });
import { NavigationActions, StackActions } from 'react-navigation';


console.disableYellowBox = true
export default class App extends Component{
  
  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <View style={{flex:1}}>
        <StatusBar backgroundColor="red"/>
          <Routes />
        </View>
        </PersistGate>
      </Provider>
    );
  }
}



