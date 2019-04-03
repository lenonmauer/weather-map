import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import styles from './styles';

const Summary = ({ data }) => (
  <View style={styles.container}>
    <Text style={styles.city}>{data.city}</Text>
    <Text style={styles.temp}>{`${data.schedules[0].temp}°C`}</Text>
    <Text style={styles.weather}>{data.schedules[0].weatherDescription}</Text>
    <Text style={styles.dayOfWeek}>{data.dayOfWeek}</Text>
  </View>
);

Summary.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.string.isRequired,
    dayOfWeek: PropTypes.string.isRequired,
    schedules: PropTypes.arrayOf(
      PropTypes.shape({
        weatherDescription: PropTypes.string.isRequired,
        temp: PropTypes.number.isRequired,
      }),
    ),
  }).isRequired,
};

export default Summary;
