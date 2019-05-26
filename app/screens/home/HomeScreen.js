import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import {
  // fetchCategoryRecipes,
  fetchUserCategories,
} from './actions';
import { LoadingScreen, RecipesList, CategoriesList } from '../../components';
import styles from './styles/HomeScreen';

@connect(
  state => ({
    recipes: state.home.recipes,
    id: state.user.info.id,
    state,
  }),
  {
    // fetchCategoryRecipes,
    fetchUserCategories,
  }
)
class HomeScreen extends Component {
  componentDidMount() {
    // this.props.fetchCategoryRecipes();
    this.props.fetchUserCategories({ userId: this.props.id });
  }

  render() {
    let isFetched = false;
    let categoryRecipes = [];
    let error = '';

    if (this.props.categories) {
      isFetched = this.props.categories.isFetched;
      categoryRecipes = this.props.categories.userCategories;
      error = this.props.categories.error;
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
    console.log(categoryRecipes);
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>{/* <CategoriesList recipes={categories} /> */}</View>
      </View>
    );
  }
}

export default HomeScreen;
