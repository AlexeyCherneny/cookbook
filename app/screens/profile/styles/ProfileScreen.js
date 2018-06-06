import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    backgroundColor: '#ffecce',
    flex: 1,
    padding: 5,
  },
  headerContainer: {
    flex: 1,
    height: 260,
    flexDirection: 'row',
  },
  avatar: {
    width: 170,
    height: 260,
  },
  fullName: {
    fontSize: 17,
  },
  userContainer: {
    flex: 1,
    marginLeft: 4,
    flexDirection: 'column',
  },
  userContainerItem: {
    flexDirection: 'column',
  },
  footerContainer: {
    flex: 1,
  },
  profileInfoBlock: {
    marginTop: 30,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  profileInfoBlockContainerTitle: {
    fontSize: 18,
  },
  profileInfoBlockContainer: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fe0000',
    padding: 15,
    height: 60,
  },
  profileInfoBlockInfo: {
    fontSize: 18,
    color: 'white',
  },
});

export default styles;
