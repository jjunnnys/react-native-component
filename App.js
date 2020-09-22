/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  Text,
} from 'react-native';
import PickerComponent from './src/PickerComponent';

class App extends Component {
  state = {
    myTextInput: '',
    alphabet: ['a', 'b', 'c', 'd'],
  };

  onChangeInput = (e) => {
    this.setState({
      myTextInput: e,
    });
  };

  onAddTextInput = () => {
    this.setState((prev) => {
      return {
        myTextInput: '',
        alphabet: [...prev.alphabet, prev.myTextInput],
      };
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <PickerComponent />
        {/* <TextInput
          style={styles.input}
          value={this.state.myTextInput}
          onChangeText={this.onChangeInput}
          multiline={true} // textarea
          maxLength={100}
          autoCapitalize={'none'} // 대문자 자동 수정 옵션(보통 이메일 정보 입력 시 사용)
          editable={true} // disable
        />
        <Button title="Add Text" onPress={this.onAddTextInput} />

        <ScrollView style={{width: '100%'}}>
          {this.state.alphabet.map((v, i) => (
            <Text key={i} style={styles.mainText}>
              {v}
            </Text>
          ))}
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50, // px 단위가 아닌 실제 폰마다의 단위
    alignItems: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'yellow',
  },
  input: {
    width: '100%',
    backgroundColor: '#eeeeee',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default App;
