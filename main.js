import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import store from './store';
import { MainNavigator } from './config/router';

class App extends Component {
  componentWillMount() {
    /*
    * if see warning of getItem of 'undefined' in Chrome with Firebase,
    * untoggle device tool bar while in remote debugger mode,
    * see issue https://goo.gl/qJ1eA0
    */
    firebase.initializeApp({
      apiKey: 'AIzaSyBssAh0BUy_0a4xE7oEXAlYn0CsFGB6owE',
      authDomain: 'university-events-app.firebaseapp.com',
      databaseURL: 'https://university-events-app.firebaseio.com',
      projectId: 'university-events-app',
      storageBucket: 'university-events-app.appspot.com',
      messagingSenderId: '188584258170'
    });
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 24
  },
});

Expo.registerRootComponent(App);
