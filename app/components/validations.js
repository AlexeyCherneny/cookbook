export const updateCategoryValidations = values => {
  const errors = {};

  const requiredFields = ['title'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Reqired';
    }
  });

  if (values.title && values.title.length < 5) {
    errors.title = 'Need to be longer';
  }

  return errors;
};

export const recipeValidations = values => {
  const errors = {};

  const requiredFields = ['title', 'description'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Reqired';
    }
  });

  if (values.title && values.title.length < 5) {
    errors.title = 'Need to be longer';
  }
  if (values.description && values.description.length < 20) {
    errors.description = 'Need to be longer';
  }

  return errors;
};
