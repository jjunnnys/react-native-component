/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const NumList = ({num}) => {
  return num.map((v, i) => (
    <View key={i} style={styles.numList}>
      <Text>{v}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  numList: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});

export default NumList;
