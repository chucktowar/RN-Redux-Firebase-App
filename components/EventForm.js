import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import { eventUpdate } from '../actions';
import { CardSection, Input } from './common';

class EventForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Title"
            placeholder="title"
            value={this.props.title}
            onChangeText={value => this.props.eventUpdate({ prop: 'title', value })}
          />
        </CardSection>

        <CardSection>
          <DatePicker
            mode="datetime"
            placeholder="select date and time"
            format="Do MMM YYYY h:mm A"
            minDate={String(moment(new Date()).format('Do MMM YYYY h:mm: A'))}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            date={this.props.time}
            onDateChange={
              value => this.props.eventUpdate({ prop: 'time', value })
            }
            style={{ width: '100%' }}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Location"
            placeholder="location"
            value={this.props.location}
            onChangeText={value => this.props.eventUpdate({ prop: 'location', value })}
          />
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { title, time, location } = state.eventForm;

  return { title, time, location };
};

export default connect(mapStateToProps, { eventUpdate })(EventForm);
