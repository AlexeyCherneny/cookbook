import React, { Component } from 'react';
import { Modal, View, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import styles from './styles/RecipeModal';

@connect(state => ({
  userId: state.user.info.id,
}), {})
class RecipeModal extends Component {
  render() {
    return (
      <Modal
        visible={this.props.visible}
        presentationStyle={'pageSheet'}
        onRequestClose={this.props.handleClose}
      >
        <View style={styles.root}>
          <View style={styles.headerContainer}>
            <Image resizeMode='cover' style={styles.preview} source={require('../img/s800.webp')} />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.props.recipe.title}</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{this.props.recipe.description}</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <Button title='Back' onPress={this.props.handleClose} />
            <Button title='Delete' onPress={this.props.handleDelete} />
            <Button title='Edit' onPress={this.props.handleEdit} />
          </View>
        </View>
      </Modal>
    );
  }
}

export default RecipeModal;
