import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import { TextInputWithValidations } from '../../../components';
import { createRecipeValidations } from '../validations';
import styles from './styles/CreateRecipeForm';

const CreateRecipeFrom = ({
  createRecipe,
  handleSubmit,
  invalid,
  submitting,
}) => (
  <View style={styles.container}>
    <Field
      component={TextInputWithValidations}
      name='title'
      label='Title'
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
    <View style={styles.container}>
      <View style={styles.buttonCreate}>
        <Button
          disabled={invalid || submitting}
          onPress={handleSubmit(createRecipe)}
          title='Create recipe'
          raised
        />
      </View>
    </View>
  </View>
);

export default reduxForm({
  form: 'createRecipe',
  validate: createRecipeValidations,
})(CreateRecipeFrom);
