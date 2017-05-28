import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';

import { eventsFetch } from '../actions';
import ListItem from './ListItem';

class Browse extends Component {
  render() {
    return (
      <View>
        <Text>Browse Screen</Text>
        <Text>shows a list of users</Text>
      </View>
    );
  }
}

export default Browse;
