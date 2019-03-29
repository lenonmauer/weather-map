import React from 'react';
import PropTypes from 'prop-types';

import { FlatList, View } from 'react-native';

import WeekForecastItem from '~/pages/Details/components/WeekForecastItem';

import styles from './styles';

const WeekForecastList = ({ data, onItemSelected }) => (
  <View style={styles.container}>
    <FlatList
      data={data}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item }) => <WeekForecastItem data={item} onItemSelected={onItemSelected} />}
    />
  </View>
);

WeekForecastList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        dayOfWeek: PropTypes.string,
        weatherIcon: PropTypes.string,
        temp: PropTypes.number,
      }),
    ),
  ).isRequired,
};

export default WeekForecastList;
