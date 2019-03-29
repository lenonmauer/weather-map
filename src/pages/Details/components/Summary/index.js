import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import styles from './styles';

const Summary = ({ data }) => (
  <View style={styles.container}>
    <Text style={styles.city}>{data.city}</Text>
    <Text style={styles.temp}>{`${data.temp}°C`}</Text>
    <Text style={styles.weather}>{data.weatherDescription}</Text>
    <Text style={styles.dayOfWeek}>{data.dayOfWeek}</Text>
  </View>
);

Summary.propTypes = {
  data: PropTypes.shape({
    time: PropTypes.string.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
  }).isRequired,
};

export default Summary;
