import React, { Component } from 'react';
import { Modal } from 'react-native';
import { connect } from 'react-redux';

import { updateCategory } from '../screens/categories/actions';
import UpdateCategoryForm from './UpdateCategoryForm';

// import styles from './styles/UdateCategoryModal';

@connect(state => ({
  userId: state.user.info.id,
}), {
  updateCategory,
})
class UdateCategoryModal extends Component {
  _updateCategory = async params => {
    await this.props.updateCategory({
      categoryId: this.props.category._id,
      title: params.title,
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
        <UpdateCategoryForm
          updateCategory={this._updateCategory}
          handleCancel={this.props.handleClose}
          category={this.props.category}
        />
      </Modal>
    );
  }
}

export default UdateCategoryModal;
