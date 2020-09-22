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
        <Image
          style={styles.image}
          // source={Icon}
          source={{
            uri:
              'https://lh3.googleusercontent.com/proxy/EMKVYz5Gr6pJWQis_pcHoDkYYRFtj762ZUaBVcqZxtnoAGfl3j465Iihr6p1Yapcvlol_lIiOzgZMDcL-jfjnzcUdRnjhGKuDImM0Q9ahcoKlfXXOA',
          }}
          resizeMode="contain" // contain : 주어진 공간에서 원본 사진을 보여주는 것, cover: 주어진 공간 다 차지 하는 것 (두 방법 모두 가로새로 비율 유지)
          onLoadEnd={() => alert('로딩 끝')} // 이미지를 다 불러오면 실행되는 props
        />
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
