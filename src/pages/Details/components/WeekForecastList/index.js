import React from 'react';
import PropTypes from 'prop-types';

import { FlatList, View } from 'react-native';

import WeekForecastItem from '~/pages/Details/components/WeekForecastItem';

import styles from './styles';

const WeekForecastList = ({ data, onItemSelected }) => (
  <View style={styles.container}>
    <FlatList
      data={data}
      keyExtractor={item => item.dayOfWeek}
      renderItem={({ item, index }) => (
        <WeekForecastItem {...item} onItemSelected={() => onItemSelected(index)} />
      )}
    />
  </View>
);

WeekForecastList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dayOfWeek: PropTypes.string,
    }),
  ).isRequired,
};

export default WeekForecastList;
