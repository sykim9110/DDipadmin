import React from 'react';
import { Field } from 'redux-form';

const Input = ({ children, id, styles, name, component, type, placeholder }) => {
  return (
    <div className="form-div">
      <label htmlFor={id}>{children}</label>
      <div>
        <Field
          className={styles}
          id={id}
          name={name}
          component={component}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export { Input };
