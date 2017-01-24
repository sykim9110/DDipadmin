import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Input } from './common';

const RestaurantForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const { onClickRestaurantAdd, loading, message, err } = props;

  return (
    <form onSubmit={handleSubmit(onClickRestaurantAdd)}>
      <h3>식당 추가</h3>
        <div className="form-div">
          <label>
            <Field name="city" component="input" type="radio" value="인천" />
              인천
          </label>
        </div>
        <div className="form-div">
          <label>
            <Field name="gu" component="input" type="radio" value="연수구" />
              연수구
          </label>
        </div>
        <div className="form-div">
          <label>
            <Field name="dong" component="input" type="radio" value="송도동" />
              송도동
          </label>
        </div>
        <div className="form-div">
          <label><Field name="categorize" component="input" type="radio" value="한식" />한식</label>
          <label><Field name="categorize" component="input" type="radio" value="중식" />중식</label>
          <label><Field name="categorize" component="input" type="radio" value="일식" />일식</label>
          <label><Field name="categorize" component="input" type="radio" value="양식" />양식</label>
          <label><Field name="categorize" component="input" type="radio" value="분식" />분식</label>
          <label><Field name="categorize" component="input" type="radio" value="치킨" />치킨</label>
          <label><Field name="categorize" component="input" type="radio" value="피자" />피자</label>
          <label><Field name="categorize" component="input" type="radio" value="아시아퓨전" />아시아퓨전</label>
        </div>
        <Input id="restaurant_name" styles="input" name="name" component="input" type="text" placeholder="이름">
          <h4>식당 이름</h4>
        </Input>
        <Input id="restaurant_phone" styles="input" name="phone" component="input" type="text" placeholder="032-123-1234">
          <h4>전화번호</h4>
        </Input>
        <Input id="restaurant_address" styles="input-wide" name="address" component="input" type="text" placeholder="주소">
          <h4>주소</h4>
        </Input>
        <div className="form-div">
          <h4>좌표</h4>
          <div>
            <div>
              <Field className="input" name="lat" component="input" type="number" placeholder="lat" />
            </div>
            <div>
              <Field className="input" name="lon" component="input" type="number" placeholder="lon" />
            </div>
          </div>
        </div>
        <div className="form-div">
          <h4>영업 시간</h4>
          <div>
            <div>
              <Field className="input" name="storehourStart" component="input" type="time" placeholder="시작 시간" />
            </div>
            <div>
              <Field className="input" name="storehourEnd" component="input" type="time" placeholder="마감 시간" />
            </div>
          </div>
        </div>
        <div className="form-div">
          <h4>영업 날</h4>
          <div className="form-div-items">
            <label><Field name="all" component="input" type="checkbox" /> 매일</label>
          </div>
          <div className="form-div-items">
            <label><Field name="mon" component="input" type="checkbox" /> 월</label>
            <label><Field name="tue" component="input" type="checkbox" /> 화</label>
            <label><Field name="wed" component="input" type="checkbox" /> 수</label>
            <label><Field name="thu" component="input" type="checkbox" /> 목</label>
            <label><Field name="fri" component="input" type="checkbox" /> 금</label>
            <label><Field name="sat" component="input" type="checkbox" /> 토</label>
            <label><Field name="sun" component="input" type="checkbox" /> 일</label>
          </div>
        </div>
        <div className="form-div">
          <h4>쿠폰</h4>
          <div className="form-div-items">
            <label>브론즈 쿠폰 </label>
            <Field name="bronzeCoupon" component="select">
              <option></option>
              <option value="10%">10%</option>
              <option value="음료수">음료수</option>
            </Field>
          </div>
          <div className="form-div-items">
            <label>실버 쿠폰 </label>
            <Field name="silverCoupon" component="select">
              <option></option>
              <option value="20%">20%</option>
              <option value="사이드메뉴">사이드메뉴</option>
            </Field>
          </div>
          <div className="form-div-items">
            <label>골드 쿠폰 </label>
            <Field name="goldCoupon" component="select">
              <option></option>
              <option value="30%">30%</option>
              <option value="40%">40%</option>
            </Field>
          </div>
          <div className="form-div-items">
            <label>플래티넘 쿠폰 </label>
            <Field name="platinumCoupon" component="select">
              <option></option>
              <option value="50%">50%</option>
              <option value="주메뉴">주메뉴</option>
            </Field>
          </div>
        </div>
        {err && <p className="err">{err}</p>}
        {message && <p id="SY-errMessage">{message}</p>}
        <div>
          <button className="btn btn-form" type="submit" disabled={pristine || submitting}>{loading ? 'loading' : '식당 추가' }</button>
          <button className="btn btn-form" disabled={pristine || submitting} onClick={reset}>초기화</button>
        </div>
    </form>
  );
};


export default reduxForm({
  form: 'restaurant'  // a unique identifier for this form
})(RestaurantForm);
