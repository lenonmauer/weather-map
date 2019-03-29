import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import { weatherIcons } from '~/config/utils';
import styles from './styles';

const WeekForecastItem = ({ data, onItemSelected }) => {
  const forecast = data[0];

  return (
    <TouchableOpacity onPress={() => onItemSelected(data)}>
      <View style={styles.container}>
        <Text style={styles.dayOfWeek}>{forecast.dayOfWeek}</Text>
        <View style={styles.wrapper}>
          <Text style={styles.temp}>{`${forecast.temp}°C`}</Text>
          <Image style={styles.icon} source={weatherIcons[forecast.weatherIcon]} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

WeekForecastItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dayOfWeek: PropTypes.string,
      temp: PropTypes.number,
      weatherIcon: PropTypes.string,
    }),
  ).isRequired,
  onItemSelected: PropTypes.func.isRequired,
};

export default WeekForecastItem;
