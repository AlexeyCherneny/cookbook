import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  recipesListTitleContainer: {
    flex: 0.1,
    paddingLeft: '4%',
    paddingTop: '5%',
  },
  recipesListTitle: {
    color: '#df3425',
    fontSize: 25,
  },
  recipesListContentContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    flexGrow: 1,
    paddingBottom: 50,
  },
  preview: {
    width: 295,
    height: 120,
  },
  recipeCard: {
    flex: 1,
    borderRadius: 9,
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    height: 230,
    width: 295,
    marginHorizontal: '1.5%',
    backgroundColor: '#fe0000',
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 14 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 1,
  },
  recipeCardTopContainer: {
    flex: 1,
    position: 'relative',
  },
  recipeCardTitle: {
    fontSize: 20,
    color: '#fff',
  },
  recipeCardBottomContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
  },
  recipeCardDescription: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    color: 'white',
  },
});

export default styles;
