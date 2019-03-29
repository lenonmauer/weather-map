import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CityForecastActions } from '~/store/ducks/city-forecast';

import { colors } from '~/styles';
import styles from './styles';

import Summary from '~/pages/Details/components/Summary';
import CurrentForecastList from '~/pages/Details/components/CurrentForecastList';
import WeekForecastList from '~/pages/Details/components/WeekForecastList';

class Details extends Component {
  componentDidMount() {
    const { getForecastRequest, navigation } = this.props;
    const city = navigation.getParam('city');

    getForecastRequest(city.id);
  }

  renderLoading = () => <ActivityIndicator size="large" color={colors.white} />;

  renderContent = () => {
    const { currentForecast, weekForecast, setCurrentForecast } = this.props;

    if (!currentForecast.length) {
      return null;
    }

    return (
      <Fragment>
        <Summary data={currentForecast[0]} />
        <CurrentForecastList data={currentForecast} />
        <WeekForecastList data={weekForecast} onItemSelected={setCurrentForecast} />
      </Fragment>
    );
  };

  render() {
    const { loading } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.black} />
        {loading ? this.renderLoading() : this.renderContent()}
      </View>
    );
  }
}

Details.propTypes = {
  getForecastRequest: PropTypes.func.isRequired,
  setCurrentForecast: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
  currentForecast: PropTypes.arrayOf(
    PropTypes.shape({
      dayOfWeek: PropTypes.string,
      time: PropTypes.string,
      city: PropTypes.string,
      weatherIcon: PropTypes.string,
      weatherDescription: PropTypes.string,
      temp: PropTypes.number,
    }),
  ).isRequired,
  weekForecast: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        dayOfWeek: PropTypes.string,
        time: PropTypes.string,
        city: PropTypes.string,
        weatherIcon: PropTypes.string,
        weatherDescription: PropTypes.string,
        temp: PropTypes.number,
      }),
    ),
  ).isRequired,
};

Details.navigationOptions = {
  title: 'Previsão do tempo',
};

const mapStateToProps = state => ({
  loading: state.cityForecast.loading,
  currentForecast: state.cityForecast.currentForecast,
  weekForecast: state.cityForecast.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...CityForecastActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
