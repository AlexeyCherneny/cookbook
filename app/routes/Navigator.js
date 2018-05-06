import { StackNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';
import { CreateRecipeScreen } from '../screens';

export default StackNavigator({
  Home: {
    screen: HomeNavigator,
  },
  CreateRecipe: {
    screen: CreateRecipeScreen,
  },
}, {
  mode: 'modal',
});
