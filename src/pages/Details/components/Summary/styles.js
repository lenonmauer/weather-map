import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  city: {
    color: colors.white,
    fontSize: 24,
  },

  temp: {
    color: colors.white,
    fontSize: 32,
    fontWeight: 'bold',
  },

  weather: {
    textTransform: 'capitalize',
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },

  dayOfWeek: {
    color: colors.white,
    fontSize: 20,
  },
});

export default styles;
