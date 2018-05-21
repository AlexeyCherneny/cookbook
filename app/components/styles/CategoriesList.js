import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    flexGrow: 1,
    // alignItems: 'center',
  },
  categoriesListScroll: {
    flex: 1,
  },
  categoriesListTitleContainer: {
    flex: 1,
  },
  categoriesListTitle: {
    flex: 1,
    alignItems: 'center',
    color: '#fff',
    fontSize: 25,
  },
  categoriesListContentContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    flexGrow: 1,
  },
  categoryCard: {
    paddingLeft: 15,
    flex: 1,
    borderRadius: 9,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    width: 295,
    marginHorizontal: '1.5%',
    backgroundColor: '#fe0000',
  },
  categoryCardLeftContainer: {
    flex: 1,
  },
  categoryCardTitle: {
    fontSize: 20,
    color: '#fff',
  },
  categoryCardRightContainer: {
    width: 100,
    flexDirection: 'row',
  },
  categoryCardButton: {
    marginRight: 20,
  },
  categoryCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
  },
  categoryCardDescription: {
    fontSize: 13,
  },
});

export default styles;
