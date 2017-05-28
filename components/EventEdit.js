import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventForm from './EventForm';
import { eventUpdate, eventSave, eventDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EventEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.event, (value, prop) => {
      this.props.eventUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { title, time, location } = this.props;

    this.props.eventSave({ title, time, location, uid: this.props.event.uid });
  }

  onAccept() {
    const { uid } = this.props.event;

    this.props.eventDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EventForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Event
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, time, location } = state.eventForm;

  return { title, time, location };
};

export default connect(mapStateToProps, {
  eventUpdate, eventSave, eventDelete
})(EventEdit);
