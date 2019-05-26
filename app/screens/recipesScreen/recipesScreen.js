import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';

import { fetchCategoryRecipes, setCurrentRecipe, deleteCategoryRecipe } from './actions';
import { LoadingScreen, RecipesList, RecipeModal, RecipeProfileFormModal } from '../../components';
import styles from './styles/recipesScreen';

@connect(
  state => ({
    user: state.user,
    currentRecipe: state.recipes.currentRecipe,
    currentCategory: state.categories.currentCategory,
    recipes: state.recipes,
    state,
  }),
  {
    fetchCategoryRecipes,
    deleteCategoryRecipe,
    setCurrentRecipe,
  }
)
class RecipesScreen extends Component {
  state = {
    recipeModalVisible: false,
    recipeProfileModalVisible: false,
  };

  componentDidMount() {
    this.props.fetchCategoryRecipes({ categoryId: this.props.currentCategory._id });
  }

  toggleRecipeModal() {
    this.setState({
      recipeModalVisible: !this.state.recipeModalVisible,
    });
  }

  toggleUpdateModal() {
    this.setState({
      recipeProfileModalVisible: !this.state.recipeProfileModalVisible,
    });
  }

  handleDelete() {
    Alert.alert('Delete', 'Delete category', [
      {
        text: 'Delete',
        onPress: () => {
          this.props.deleteCategoryRecipe({
            recipeId: this.props.currentRecipe._id,
            categoryId: this.props.currentCategory._id,
          });
          this.toggleRecipeModal();
        },
      },
      { text: 'Cancel', onPress: () => {} },
    ]);
  }

  showCurrentRecipe(args) {
    this.props.setCurrentRecipe(args);
    this.toggleRecipeModal();
  }

  render() {
    let isFetched = false;
    let categoryRecipes = [];
    let error = false;

    if (this.props.recipes) {
      isFetched = this.props.recipes.isFetched;
      categoryRecipes = this.props.recipes.categoryRecipes;
      error = this.props.recipes.error.on;
    }

    if (!isFetched) {
      return <LoadingScreen />;
    } else if (error.on) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      );
    }

    return (
      <View style={styles.root}>
        <RecipeModal
          recipe={
            this.props.currentRecipe === undefined
              ? { title: '', description: '' }
              : this.props.currentRecipe
          }
          visible={this.state.recipeModalVisible}
          handleClose={() => this.toggleRecipeModal()}
          handleDelete={() => this.handleDelete()}
          handleEdit={() => this.toggleUpdateModal()}
        />
        <RecipeProfileFormModal
          recipe={
            this.props.currentRecipe === undefined
              ? { title: '', description: '' }
              : this.props.currentRecipe
          }
          visible={this.state.recipeProfileModalVisible}
          handleClose={() => this.toggleUpdateModal()}
        />
        <RecipesList
          recipes={categoryRecipes}
          category={this.props.currentCategory}
          showCurrentRecipe={args => this.showCurrentRecipe(args)}
        />
      </View>
    );
  }
}

export default RecipesScreen;
