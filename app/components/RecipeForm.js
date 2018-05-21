import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import TextInputWithValidations from './TextInputWithValidations';
import { recipeValidations } from './validations';
import styles from './styles/RecipeForm';

class RecipeForm extends React.Component {
  componentWillMount() {
    this.props.initialize({
      title: this.props.recipe.title,
      description: this.props.recipe.description,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Field
          component={TextInputWithValidations}
          name='title'
          label='Title'
          defaultValue='no man'
          value='man'
          selectionColor='red'
          containerStyle={styles.item}
        />
        <Field
          component={TextInputWithValidations}
          name='description'
          label='Description'
          selectionColor='red'
          multiline
          containerStyle={styles.item}
        />
        <View style={styles.buttons}>
          <View style={styles.buttonCancel}>
            <Button
              onPress={this.props.handleClose}
              title='Cancel'
              raised
            />
          </View>
          <View style={styles.buttonUpdate}>
            <Button
              disabled={this.props.invalid || this.props.submitting}
              onPress={this.props.handleSubmit(this.props.updateRecipe)}
              title='Update recipe'
              raised
            />
          </View>
        </View>
      </View>
    );
  }
}

export default reduxForm({
  form: 'recipeForm',
  validate: recipeValidations,
})(RecipeForm);
