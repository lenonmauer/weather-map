import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import { weatherIcons } from '~/config/utils';
import styles from './styles';

const CurrentForecastItem = ({ time, temp, weatherIcon }) => (
  <View style={styles.container}>
    <Text style={styles.time}>{time}</Text>
    <Image style={styles.icon} source={weatherIcons[weatherIcon]} />
    <Text style={styles.temp}>{`${temp}°C`}</Text>
  </View>
);

CurrentForecastItem.propTypes = {
  time: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
};

export default CurrentForecastItem;
