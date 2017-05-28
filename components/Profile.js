import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { loginUser } from '../actions';

class Profile extends Component {

  onCreatePress() {
    this.props.navigation.navigate('create');
  };

  render() {
    return (
      <View>
        <View>
          <Text>Currently logged in user:</Text>
          <Text>{this.props.user.email}</Text>
        </View>

        <Button
          title="Add Event"
          onPress={this.onCreatePress.bind(this)}
          style={{ marginTop: 30 }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.auth;

  return { user };
};

export default connect(mapStateToProps, { loginUser })(Profile);
