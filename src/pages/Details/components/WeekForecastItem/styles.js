import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteTransparent,
    marginBottom: 1,
    paddingVertical: metrics.basePadding / 3,
    paddingHorizontal: metrics.basePadding / 4,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dayOfWeek: {
    color: colors.white,
  },

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  temp: {
    color: colors.white,
    marginRight: 3,
  },

  icon: {
    height: 30,
    width: 30,
  },
});

export default styles;
