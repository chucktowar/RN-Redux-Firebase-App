import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

import { eventsFetch } from '../actions';
import ListItem from './ListItem';

class EventList extends Component {
  componentWillMount() {
    this.props.eventsFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ events }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(events);
  }

  renderRow(event) {
    return <ListItem event={event} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const events = _.map(state.events, (val, uid) => {
    return { ...val, uid };
  });

  return { events };
};

export default connect(mapStateToProps, { eventsFetch })(EventList);
