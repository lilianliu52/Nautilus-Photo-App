import React, { Component } from 'react';
import { AppRegistry, View, ScrollView, Image, Text, StyleSheet } from 'react-native';

import Component1 from './app/components/Component1/Component1';

export default class reactPhotoAPP extends Component {
  render() {
    return (
      <View>
        <Component1 />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactPhotoAPP', () => reactPhotoAPP);