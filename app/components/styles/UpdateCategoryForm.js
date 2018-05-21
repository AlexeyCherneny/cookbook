import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  item: {
    marginVertical: '2%',
  },
  buttons: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    bottom: '10%',
  },
  buttonsSingle: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    bottom: '10%',
    right: '5%',
  },
  button: {
    width: 180,
  },
});

export default styles;
