import React from 'react';
import PropTypes from 'prop-types';

import { FlatList, View } from 'react-native';

import CurrentForecastItem from '~/pages/Details/components/CurrentForecastItem';

import styles from './styles';

const CurrentForecast = ({ data }) => (
  <View style={styles.container}>
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.time}
      renderItem={({ item }) => <CurrentForecastItem data={item} />}
    />
  </View>
);

CurrentForecast.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      weatherIcon: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CurrentForecast;
