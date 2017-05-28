import React, { Component } from 'react';
import { connect } from 'react-redux';

import { eventUpdate, eventCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EventForm from './EventForm';

class EventCreate extends Component {
  onButtonPress() {
    const { title, time, location } = this.props;

    this.props.eventCreate({ title, time, location });
  }

  render() {
    return (
      <Card>
        <EventForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, time, location } = state.eventForm;

  return { title, time, location };
};

export default connect(mapStateToProps, {
  eventUpdate, eventCreate
})(EventCreate);
