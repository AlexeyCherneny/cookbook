import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

import { CreateRecipeForm } from './components'; 
import { LoadingScreen } from '../../components';
import { createRecipe } from './actions';
import styles from './styles/CreateRecipeScreen';

const NavbarDefaultStyle = {
  backgroundColor: 'red',
  marginTop: 20,
};

const TitleDefaultStyle = {
  color: 'white',
  fontSize: 20,
};

@connect(
  state => ({
    categoryId: state.categories.currentCategory._id,
    recipe: state.createCategoryRecipe,
  }), {
    createRecipe,
  }
)
export default class CreateRecipeScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Create recipe',
    headerStyle: NavbarDefaultStyle,
    headerTitleStyle: TitleDefaultStyle,
  })

  _createRecipe = async values => {
    await this.props.createRecipe({ ...values, categoryId: this.props.categoryId });
    this.props.navigation.goBack();
  }
  
  render() {
    const { recipe } = this.props;

    if (recipe.isLoading) {
      return (
        <View style={styles.root}>
          <LoadingScreen />
        </View>
      );
    } else if (recipe.error.on) {
      return (
        <View style={styles.root}>
          <Text>{recipe.error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <CreateRecipeForm
          createRecipe={(args) => this._createRecipe(args)}
        /> 
      </View>
    );
  }
}
