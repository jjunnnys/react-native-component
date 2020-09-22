/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

class Input extends Component {
  state = {
    myTextInput: 'My ',
  };

  onChangeInput = (e) => {
    this.setState({
      myTextInput: e,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          style={styles.input}
          value={this.state.myTextInput}
          onChangeText={this.onChangeInput}
          multiline={true} // textarea
          maxLength={100}
          autoCapitalize={'none'} // 대문자 자동 수정 옵션(보통 이메일 정보 입력 시 사용)
          editable={false} // disable
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#eeeeee',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default Input;
