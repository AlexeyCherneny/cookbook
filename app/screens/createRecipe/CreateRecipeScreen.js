import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { connect } from 'react-redux';

import { CreateRecipeForm } from './components'; 
import { LoadingScreen } from '../../components';
import { createRecipe } from './actions';
import styles from './styles/CreateRecipeScreen';

@connect(
  state => ({
    recipe: state.createCategoryRecipe,
  }), {
    createRecipe,
  }
)
export default class CreateRecipeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create recipe',
    headerStyle: ({ color: 'white' }),
    headerRight: ( 
      <TouchableOpacity style={styles.iconClose} onPress={() => navigation.goBack()}>
        <MaterialIcons
          name='close'
          size={30}
          color='#fff'
        />
      </TouchableOpacity>
    ),
  })

  _createRecipe = async values => {
    await this.props.createRecipe(values);
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
          createRecipe={this._createRecipe}
        /> 
      </View>
    );
  }
}
