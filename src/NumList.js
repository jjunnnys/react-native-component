/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const NumList = ({num, remove}) => {
  return num.map((v, i) => (
    <TouchableOpacity key={i} style={styles.numList} onPress={remove(i)}>
      <Text>{v}</Text>
    </TouchableOpacity>
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
