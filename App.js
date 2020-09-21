/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View>
          <Text>hello world</Text>
        </View>
        <View>
          <Text>hello world</Text>
        </View>
        <View>
          <Text>hello world</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: 50, // px 단위가 아닌 실제 폰마다의 단위
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
