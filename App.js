/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Icon from './assets/images/icon.png';
import ModalComponent from './src/Modal';

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
        <ModalComponent />
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
  image: {
    width: '100%',
    height: '100%',
  },
});

export default App;
