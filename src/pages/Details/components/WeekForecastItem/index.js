import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import { weatherIcons } from '~/config/utils';
import styles from './styles';

const WeekForecastItem = ({ dayOfWeek, schedules, onItemSelected }) => (
  <TouchableOpacity onPress={onItemSelected}>
    <View style={styles.container}>
      <Text style={styles.dayOfWeek}>{dayOfWeek}</Text>
      <View style={styles.wrapper}>
        <Text style={styles.temp}>{`${schedules[0].temp}°C`}</Text>
        <Image style={styles.icon} source={weatherIcons[schedules[0].weatherIcon]} />
      </View>
    </View>
  </TouchableOpacity>
);

WeekForecastItem.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  schedules: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.number,
      weatherIcon: PropTypes.string,
    }),
  ).isRequired,
};

export default WeekForecastItem;
