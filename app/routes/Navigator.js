import React from 'react';
import { StackNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import HomeNavigator from './HomeNavigator';
import { CreateRecipeScreen, CreateCategoryScreen, RecipesScreen } from '../screens';

const NavbarDefaultStyle = {
  backgroundColor: 'red',
  marginTop: 20,
};

const TitleDefaultStyle = {
  color: 'white',
  fontSize: 20,
};

export default StackNavigator(
  {
    Home: {
      screen: HomeNavigator,
    },
    CategoryRecipes: {
      screen: RecipesScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Recipes',
        headerStyle: NavbarDefaultStyle,
        headerTitleStyle: TitleDefaultStyle,
        headerRight: (
          <MaterialIcons
            name="add-circle"
            style={{
              marginRight: 10,
            }}
            onPress={() => navigation.navigate('CreateRecipe')}
            size={35}
            color="white"
          />
        ),
        tabBarHidden: true,
      }),
    },
    CreateCategory: {
      screen: CreateCategoryScreen,
      navigationOptions: () => ({
        title: 'Create category',
        headerStyle: NavbarDefaultStyle,
        headerTitleStyle: TitleDefaultStyle,
      }),
    },
    CreateRecipe: {
      screen: CreateRecipeScreen,
    },
  },
  {
    mode: 'card',
  }
);
