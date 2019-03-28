import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: metrics.basePadding,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding / 2,
    color: colors.darker,
  },

  listWrapper: {
    marginTop: metrics.baseMargin,
  },
});

export default styles;
