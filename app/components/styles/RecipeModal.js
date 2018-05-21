import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#ffecce',
  },
  headerContainer: {
    width: '100%',
  },
  preview: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    height: 250,
  },
  titleContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 23,
    color: '#fe0000',
  },
  descriptionContainer: {
    flex: 1,
  },
  description: {
    fontSize: 17,
    color: '#fe0000',
  },
  buttonsContainer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: '5%',
    width: '100%',
  },
});

export default styles;
