/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, Modal} from 'react-native';

class ModalComponent extends Component {
  state = {
    modal: false,
  };

  handleModal = () => {
    this.setState((prev) => ({
      modal: !prev.modal,
    }));
  };

  render() {
    return (
      <View style={{width: '100%'}}>
        <Button title="Open Modal" onPress={this.handleModal} />
        <Modal
          visible={this.state.modal}
          animationType={'slide'} // none, slide, fade
          onShow={() => alert('모달창 떴음')} // 모달창이 떴을 때 트리거
        >
          <View style={{marginTop: 60, backgroundColor: 'red'}}>
            <Text>모달</Text>
          </View>
          <Button title="Go Back" onPress={this.handleModal} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default ModalComponent;
