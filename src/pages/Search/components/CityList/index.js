import React from 'react';
import PropTypes from 'prop-types';

import { FlatList } from 'react-native';

import CityItem from '~/pages/Search/components/CityItem';

const CityList = ({ data, navigate }) => (
  <FlatList data={data} renderItem={({ item }) => <CityItem city={item} onPress={navigate} />} />
);

CityList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      key: PropTypes.string,
      name: PropTypes.string,
      country: PropTypes.string,
      temperature: PropTypes.number,
    }),
  ).isRequired,
  navigate: PropTypes.func.isRequired,
};

export default CityList;
