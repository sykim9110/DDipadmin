import React from 'react';
import { Field } from 'redux-form';

const Input = ({ children, id, flex, name, component, type, placeholder }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{children}</label>
      <div className={flex}>
        <Field
          className="form-control"
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
