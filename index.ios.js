import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
} from 'react-native';
import Screen1 from './src/components/screen1';

var ROUTES = {
  screen1: Screen1
};

var guesswhat = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ name: 'screen1' }}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('guesswhat', () => guesswhat);
