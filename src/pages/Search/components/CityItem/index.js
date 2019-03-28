import React from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-native-flags';

import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const CityItem = ({ city, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={() => onPress(city)}>
    <Flag code={city.country} size={32} />
    <Text style={styles.cityName}>{city.name}</Text>
    <Text style={styles.temperature}>{`${city.temperature}°C`}</Text>
  </TouchableOpacity>
);

CityItem.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    country: PropTypes.string,
    temperature: PropTypes.number,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CityItem;
