import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from './Input';
import Select from './Select';

// Validation
const schemaValidation = yup.object().shape({
  name: yup
    .string()
    .required('Name field is required')
    .min(3, 'Name field should contains at least 3 characters'),
  gender: yup.string().required('Gender fiels is required'),
  age: yup
    .number()
    .typeError('Age field must be a number')
    .required('Age field is required'),
});

const HookForms = () => {
  // react-hook-form
  const { errors, handleSubmit, register, reset } = useForm({
    defaultValues: {
      age: 18,
    },
    resolver: yupResolver(schemaValidation),
  });

  // submit
  const submitForm = (data) => {
    console.log(data);
    reset(); // reset form
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {/* Custom Input */}
      <Input
        label="Name"
        id="Name"
        name="name"
        register={register}
        errors={errors.name}
      />

      {/* Custom Select */}
      <Select
        label="Gender"
        id="gender"
        name="gender"
        register={register}
        errors={errors.gender}
        options={[
          { value: '', label: 'Select...' },
          { value: 'female', label: 'Female' },
          { value: 'male', label: 'Male' },
        ]}
      />

      {/* Custom Input */}
      <Input
        label="Age"
        id="age"
        name="age"
        register={register}
        errors={errors.age}
      />

      <button type="submit">Send</button>
      {console.log(errors)}
    </form>
  );
};

export default HookForms;
