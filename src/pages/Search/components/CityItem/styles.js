import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginBottom: metrics.baseMargin / 2,
    borderRadius: metrics.baseRadius,
    paddingVertical: metrics.basePadding / 3,
    paddingHorizontal: metrics.basePadding / 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cityName: {
    marginLeft: metrics.baseMargin / 2,
    flex: 1,
    fontWeight: 'bold',
  },

  temperature: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
