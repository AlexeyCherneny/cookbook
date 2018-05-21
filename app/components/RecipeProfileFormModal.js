import React, { Component } from 'react';
import { Modal } from 'react-native';
import { connect } from 'react-redux';

import { updateRecipe } from '../screens/recipesScreen/actions';
import RecipeForm from './RecipeForm';
// import styles from './styles/RecipeProfileModal';

@connect(state => ({
  userId: state.user.info.id,
}), {
  updateRecipe,
})
class RecipeProfileModal extends Component {
  _updateRecipe = async args => {
    await this.props.updateRecipe({
      recipeId: this.props.recipe._id,
      title: args.title,
      description: args.description,
    });
    this.props.handleClose();
  }

  render() {
    return (
      <Modal
        visible={this.props.visible}
        presentationStyle={'pageSheet'}
        onRequestClose={this.props.handleClose}
      >
        <RecipeForm
          handleClose={this.props.handleClose}
          recipe={this.props.recipe}
          updateRecipe={args => this._updateRecipe(args)}
        />
      </Modal>
    );
  }
}

export default RecipeProfileModal;
