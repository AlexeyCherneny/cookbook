import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchCategoryRecipes } from './actions';
import { LoadingScreen, RecipesList } from '../../components';
import styles from './styles/HomeScreen';

@connect(state => ({
  recipes: state.home.recipes,
}), { fetchCategoryRecipes })
class HomeScreen extends Component {
  componentDidMount() {
    this.props.fetchCategoryRecipes();
  }

  render() {
    let isFetched = false;
    let categoryRecipes = [];
    let error = '';

    if (this.props.recipes) {
      isFetched = this.props.recipes.isFetched;
      categoryRecipes = this.props.recipes.categoryRecipes;
      error = this.props.recipes.error;
    }
    if (!isFetched) {
      return <LoadingScreen />;
    } else if (error.on) {
      return (
        <View>
          <Text>
            {error.message}
          </Text>
        </View>
      );
    }
    console.log(categoryRecipes)
    return (
      <View style={styles.root}>
        <View style={styles.botContainer}>
          <Text>Home</Text>
        </View>
        <View style={styles.topContainer}>
          <RecipesList recipes={categoryRecipes} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
