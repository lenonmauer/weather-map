import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.basePadding / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  time: {
    color: colors.white,
  },

  temp: {
    color: colors.white,
  },

  icon: {
    height: 30,
    width: 30,
  },
});

export default styles;
