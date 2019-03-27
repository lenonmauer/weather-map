import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

class Search extends Component {
  static navigationOptions = {
    headerTitleStyle: styles.headerTitle,
  };

  render() {
    return (
      <View>
        <Text>Hello 2</Text>
      </View>
    );
  }
}

export default Search;
