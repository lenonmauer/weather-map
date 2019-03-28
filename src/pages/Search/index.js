import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, TextInput, StatusBar, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CityList from '~/pages/Search/components/CityList';

import { SearchActions } from '~/store/ducks/search';

import styles from './styles';
import { colors } from '~/styles';

import debounce from '~/helpers/debounce';

class Search extends Component {
  static navigationOptions = {
    headerTitleStyle: styles.headerTitle,
  };

  static propTypes = {
    getSearchRequest: PropTypes.func.isRequired,
    searchResult: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        key: PropTypes.string,
        name: PropTypes.string,
        country: PropTypes.string,
        temperature: PropTypes.number,
      }),
    ).isRequired,
    searchLoading: PropTypes.bool.isRequired,
    navigation: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { getSearchRequest } = this.props;

    this.searchDelay = debounce(getSearchRequest, 800);

    this.searchDelay('tramandai');
  }

  render() {
    const { searchResult, searchLoading } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.black} />

        <TextInput
          autoFocus
          style={styles.input}
          onChangeText={text => this.searchDelay(text)}
          placeholder="Digite o nome da cidade..."
        />

        <View style={styles.listWrapper}>
          {searchLoading ? (
            <ActivityIndicator size="large" color={colors.white} />
          ) : (
            <CityList
              data={searchResult}
              navigate={city => this.props.navigation.push('Details', { city })}
            />
          )}
        </View>
      </View>
    );
  }
}

const formatSearchResult = (data) => {
  if (data.list) {
    return data.list.map(city => ({
      id: city.id,
      key: String(city.id),
      name: city.name,
      country: city.sys.country.toUpperCase(),
      temperature: parseInt(city.main.temp, 10),
    }));
  }

  return [];
};

const mapStateToProps = state => ({
  searchResult: formatSearchResult(state.search.data),
  searchLoading: state.search.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...SearchActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
