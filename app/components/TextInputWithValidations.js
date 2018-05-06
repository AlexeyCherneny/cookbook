import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const TextInputWithValidations = ({
  input,
  containerStyle,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <View style={containerStyle}>
    <FormLabel labelStyle={{ color: '#384259' }}>{label}</FormLabel>
    <FormInput
      {...input}
      {...custom}
    />
    {error && touched &&
      <FormValidationMessage labelStyle={{ color: 'red' }}>
        {error}
      </FormValidationMessage>
    }
  </View>
);

export default TextInputWithValidations;
