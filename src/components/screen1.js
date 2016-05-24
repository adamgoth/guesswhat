import React, { Component } from 'react';
import {
  Picker,
  StyleSheet,
  Text,
  View
} from 'react-native';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      language: 'js',
      selected2: 'key1',
      selected3: 'key1',
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>Pick me</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  },

  onValueChange: function(key: string, value: string) {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  picker: {
    width: 100,
  },
});
