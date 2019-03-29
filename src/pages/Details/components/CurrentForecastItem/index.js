import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import { weatherIcons } from '~/config/utils';
import styles from './styles';

const CurrentForecastItem = ({ data }) => (
  <View style={styles.container}>
    <Text style={styles.time}>{data.time}</Text>
    <Image style={styles.icon} source={weatherIcons[data.weatherIcon]} />
    <Text style={styles.temp}>{`${data.temp}°C`}</Text>
  </View>
);

CurrentForecastItem.propTypes = {
  data: PropTypes.shape({
    time: PropTypes.string.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
  }).isRequired,
};

export default CurrentForecastItem;
