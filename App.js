import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Blink style={styles.red} text='just red'/>
        <Blink style={styles.bigBlue}just text='bigBlue'/>
        <Blink style={[styles.bigBlue, styles.red]} text='bigBlue, then red'/>
        <Blink style={[styles.red, styles.bigBlue]} text='red, then bigBlue'/>
      </View>
    );
  }
}

// skip this line if using Create React Native App
