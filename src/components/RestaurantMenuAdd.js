import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

const RestaurantMenuAdd = () => {
  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-div-items">
      <label>{label}</label>
      <div className="form-div-items">
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );

  const renderMembers = ({ fields, meta: { touched, error } }) => (
  <ul className="list-group-item">
    {fields.map((menu, index) =>
      <li className="list-group-item" key={index}>
        <button
          className="btn"
          type="button"
          title="Remove Menu"
          onClick={() => fields.remove(index)}
        >
          #{index + 1} 메뉴 제거
        </button>
        <h4>메뉴 #{index + 1}</h4>
        <Field
          name={`${menu}.menuName`}
          type="text"
          component={renderField}
          label="메뉴 이름"
        />
        <Field
          name={`${menu}.menuPrice`}
          type="number"
          component={renderField}
          label="메뉴 가격"
        />
      </li>
    )}
    <li className="list-group-item">
      <button className="btn" type="button" onClick={() => fields.push({})}>메뉴 추가</button>
      {touched && error && <span>{error}</span>}
    </li>
  </ul>
  );

  return (
    <FieldArray name="menus" component={renderMembers} />
  );
};


export default reduxForm({
  form: 'menu'  // a unique identifier for this form
})(RestaurantMenuAdd);
