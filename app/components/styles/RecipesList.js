import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  recipesListTitleContainer: {
    flex: 0.1,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%',
  },
  recipesListTitle: {
    color: '#fff',
    fontSize: 25,
    // fontFamily: 'slabo',
  },
  recipesListContentContainer: {
    flex: 1,
  },
  recipeCard: {
    height: 200,
    width: 175,
    marginHorizontal: '1.5%',
    backgroundColor: 'red',
  },
  recipeCardTopContainer: {
    flex: 1,
    position: 'relative',
  },
  recipeCardTitle: {
    // fontFamily: 'montserratBold',
    position: 'absolute',
    color: '#fff',
    top: '2%',
    left: '2.5%',
  },
  recipeCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
  },
  recipeCardDescription: {
    fontSize: 13,
    // fontFamily: 'montserratLight',
  },
});

export default styles;
