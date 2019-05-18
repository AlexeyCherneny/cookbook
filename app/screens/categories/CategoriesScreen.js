import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';

import { fetchUserCategories, deleteCategory, setCurrentCategory } from './actions';
import { LoadingScreen, CategoriesList, UpdateCategoryModal } from '../../components';
import styles from './styles/CategoriesScreen';

@connect(
  state => ({
    user: state.user,
    categories: state.categories,
  }),
  {
    setCurrentCategory,
    fetchUserCategories,
    deleteCategory,
  }
)
class CategoriesScreen extends Component {
  state = {
    editModalVisible: false,
    currentCategory: {},
  };

  componentDidMount() {
    this.props.fetchUserCategories({ userId: this.props.user.info.id });
  }

  _deleteCategoryRequest(params) {
    Alert.alert('Delete', 'Delete category', [
      {
        text: 'Delete',
        onPress: () =>
          this.props.deleteCategory({
            ...params,
            userId: this.props.user.info.id,
          }),
      },
      { text: 'Cancel', onPress: () => {} },
    ]);
  }

  toggleUpdateModal(params) {
    this.setState({
      currentCategory: params && params.category && params.category,
      editModalVisible: !this.state.editModalVisible,
    });
  }

  showCategoryRecipes(args) {
    this.props.setCurrentCategory(args);
    this.props.navigation.navigate('CategoryRecipes');
  }

  render() {
    let isFetched = false;
    let userCategories = [];
    let error = false;

    if (this.props.categories) {
      isFetched = this.props.categories.isFetched;
      userCategories = this.props.categories.userCategories;
      error = this.props.categories.error.on;
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
        <UpdateCategoryModal
          category={this.state.currentCategory}
          visible={this.state.editModalVisible}
          handleClose={() => this.toggleUpdateModal()}
        />
        <CategoriesList
          categories={userCategories}
          toggleUpdateModal={args => this.toggleUpdateModal(args)}
          showCategoryRecipes={args => this.showCategoryRecipes(args)}
          deleteCategoryRequest={args => this._deleteCategoryRequest(args)}
        />
      </View>
    );
  }
}

export default CategoriesScreen;
