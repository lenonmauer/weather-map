import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CityForecastActions } from '~/store/ducks/city-forecast';

import { weekForecastsMapper, currentForecastMapper } from './data-mapper';

import { colors } from '~/styles';
import styles from './styles';

import Summary from '~/pages/Details/components/Summary';
import CurrentForecastList from '~/pages/Details/components/CurrentForecastList';
import WeekForecastList from '~/pages/Details/components/WeekForecastList';

class Details extends Component {
  state = {
    ready: false,
  };

  componentDidMount() {
    const { getForecastRequest, navigation } = this.props;
    const city = navigation.getParam('city');

    getForecastRequest(city.id);

    this.setState({ ready: true });
  }

  renderLoading = () => <ActivityIndicator size="large" color={colors.white} />;

  renderContent = () => {
    const { currentForecast, weekForecast, setCurrentDayIndex } = this.props;

    return (
      <Fragment>
        <Summary data={currentForecast} />
        <CurrentForecastList data={currentForecast.schedules} />
        <WeekForecastList data={weekForecast.forecasts} onItemSelected={setCurrentDayIndex} />
      </Fragment>
    );
  };

  render() {
    const { loading } = this.props;
    const { ready } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.black} />
        {loading || !ready ? this.renderLoading() : this.renderContent()}
      </View>
    );
  }
}

Details.propTypes = {
  getForecastRequest: PropTypes.func.isRequired,
  setCurrentDayIndex: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
  currentForecast: PropTypes.shape({
    dayOfWeek: PropTypes.string,
    time: PropTypes.string,
    city: PropTypes.string,
    weatherIcon: PropTypes.string,
    weatherDescription: PropTypes.string,
    temp: PropTypes.number,
  }).isRequired,
  weekForecast: PropTypes.shape({
    city: PropTypes.string,
    forecasts: PropTypes.arrayOf(
      PropTypes.shape({
        dayOfWeek: PropTypes.string,
        schedules: PropTypes.arrayOf(
          PropTypes.shape({
            time: PropTypes.string,
            weatherIcon: PropTypes.string,
            weatherDescription: PropTypes.string,
            temp: PropTypes.number,
          }),
        ),
      }),
    ),
  }).isRequired,
};

Details.navigationOptions = {
  title: 'Previsão do tempo',
};

const mapStateToProps = (state) => {
  if (!state.cityForecast.data) {
    return {
      loading: state.cityForecast.loading,
      currentForecast: {},
      weekForecast: {},
    };
  }

  const weekForecast = weekForecastsMapper(state.cityForecast.data);

  return {
    loading: state.cityForecast.loading,
    currentForecast: currentForecastMapper(weekForecast, state.cityForecast.currentDayIndex),
    weekForecast,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...CityForecastActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
