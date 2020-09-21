/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const header = ({name}) => {
  return (
    // view랑 text에 터치 이벤트를 먹일 수 있음
    <TouchableOpacity
      style={styles.header}
      //   onPress={() => alert('hello world')}
      onLongPress={() => alert('hello world')}>
      <View>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: '100%',
  },
});

export default header;
