import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { createUserCategory } from './actions';
import { LoadingScreen } from '../../components';
import UpdateCategoryForm from '../../components/UpdateCategoryForm';

import styles from './styles/CreateCategoryScreen';

@connect(
  state => ({
    userId: state.user.info.id,
    category: state.createUserCategory,
  }),
  {
    createUserCategory,
  }
)
class UdateCategoryModal extends Component {
  _createCategory = async params => {
    await this.props.createUserCategory({
      userId: this.props.userId,
      title: params.title,
    });
    this.props.navigation.goBack();
  };

  render() {
    const { category } = this.props;

    if (category.isLoading) {
      return (
        <View style={styles.root}>
          <LoadingScreen />
        </View>
      );
    } else if (category.error.on) {
      return (
        <View style={styles.root}>
          <Text>{category.error.message}</Text>
        </View>
      );
    }
    return (
      <UpdateCategoryForm
        createCategory={args => this._createCategory(args)}
        handleCancel={this.props.navigation.goBack}
      />
    );
  }
}

export default UdateCategoryModal;
