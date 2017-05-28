import _ from 'lodash';
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';

import { CardSection } from './common';

class ListItem extends Component {

  onIconPress() {
    return;
  }

  render() {
    const { currentUser } = firebase.auth();
    const { title, time, location, going, user } = this.props.event;

    let iconStatus = null;

    if (_.includes(going, currentUser.uid)) {
      iconStatus = <Ionicons name="ios-checkmark-circle" size={32} color="black" />;
    } else {
      iconStatus = <Ionicons name="ios-checkmark-circle-outline" size={32} color="black" />;
    }

    return (
      <View style={styles.cardContainerStyle}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 22 }}>{title}</Text>
          <Text style={styles.subtitleStyle}>{time}</Text>
          <Text style={styles.subtitleStyle}>{location}</Text>
        </View>

        <View style={styles.footerContainerStyle}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
            <View>
              <Text>by {user.email}</Text>
              <Text>{_.size(going)} going</Text>
            </View>
          </View>

          <View style={{ marginRight: 10, alignSelf: 'center' }}>
            <TouchableWithoutFeedback onPress={this.onIconPress.bind(this)}>
              {iconStatus}
            </TouchableWithoutFeedback>
          </View>
        </View>

      </View>
    );
  }
}

const styles = {
  cardContainerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    flexDirection: 'column'
  },
  subtitleStyle: {
    color: '#262626'
  },
  footerContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};

export default ListItem;
