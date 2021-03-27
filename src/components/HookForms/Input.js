import React from 'react';
import PropTypes from 'prop-types';
import './FormField.css';

const Input = ({ label, id, name, register, errors, ...inputProps }) => {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input type="text" id={id} name={name} ref={register} {...inputProps} />
      {errors && <span className="form-error">{errors.message}</span>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  inputProps: PropTypes.array,
};

export default Input;
