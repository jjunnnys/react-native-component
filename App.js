/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Generator from './src/Generator';

import Header from './src/Header';
import Input from './src/Input';
import NumList from './src/NumList';

class App extends Component {
  state = {
    appName: 'My First App',
    random: [],
  };

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Math.random() 0~1까지 랜덤한 변수를 만드는 내장 함수

    this.setState((prev) => {
      return {
        random: [...prev.random, randomNum],
      };
    });
  };

  onNumDelete = (index) => () => {
    const newArray = this.state.random.filter((num, i) => index !== i);

    this.setState(() => ({
      random: newArray,
    }));
  };

  render() {
    return (
      <View style={styles.mainView}>
        {/* <Header name={this.state.appName} />
        <View>
          <Text
            style={styles.mainText}
            onPress={() => alert('text touch event')}>
            Hello World
          </Text>
        </View>
        <Generator add={this.onAddRandomNum} />
        <ScrollView
          style={{width: '100%'}}
          // onMomentumScrollBegin={() => alert('begin')}
          // onMomentumScrollEnd={() => alert('end')}
          // onScroll={() => alert('scroll')}
          // onContentSizeChange={(width, height) => alert(height)}
          bounces={false}>
          <NumList num={this.state.random} remove={this.onNumDelete} />
        </ScrollView> */}
        <Input />
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
  },
});

export default App;
