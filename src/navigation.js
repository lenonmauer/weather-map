import { createAppContainer, createStackNavigator } from 'react-navigation';

import Search from '~/pages/Search';
import Details from '~/pages/Details';
import { colors } from '~/styles';

const AppNavigation = createStackNavigator(
  {
    Search,
    Details,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Weather Map',
      headerStyle: {
        backgroundColor: colors.darker,
      },
      headerTintColor: colors.white,
      headerBackTitle: null,
    },
  },
);

export default createAppContainer(AppNavigation);
