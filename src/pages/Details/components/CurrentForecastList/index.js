import React from 'react';
import PropTypes from 'prop-types';

import { FlatList, View } from 'react-native';

import CurrentForecastItem from '~/pages/Details/components/CurrentForecastItem';

import styles from './styles';

const CurrentForecastList = ({ data }) => (
  <View style={styles.container}>
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.time}
      renderItem={({ item }) => <CurrentForecastItem {...item} />}
    />
  </View>
);

CurrentForecastList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dayOfWeek: PropTypes.string,
    }),
  ).isRequired,
};

export default CurrentForecastList;
