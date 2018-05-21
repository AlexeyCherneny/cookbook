import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import TextInputWithValidations from './TextInputWithValidations';
import { updateCategoryValidations } from './validations';
import styles from './styles/UpdateCategoryForm';

const UpdateCategoryForm = ({
  updateCategory,
  createCategory,
  handleSubmit,
  handleCancel,
  invalid,
  submitting,
  category,
}) => (
  <View style={styles.container}>
    <Field
      component={TextInputWithValidations}
      name='title'
      label='Title'
      value={category && category.title}
      selectionColor='red'
      containerStyle={styles.item}
    />
    <View style={styles.container}>
      <View style={category ? styles.buttons : styles.buttonsSingle}>
        {category && <View style={styles.button}>
          <Button
            onPress={handleCancel}
            title='Cancel'
            raised
          />
        </View>}
        <View style={styles.button}>
          <Button
            disabled={invalid || submitting}
            onPress={handleSubmit(category ? updateCategory : createCategory)}
            title={category ? 'Update' : 'Create'}
            raised
          />
        </View>
      </View>
    </View>
  </View>
);

export default reduxForm({
  form: 'updateCategory',
  validate: updateCategoryValidations,
})(UpdateCategoryForm);
