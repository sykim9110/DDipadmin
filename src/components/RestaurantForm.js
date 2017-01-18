import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Input } from './common';

const RestaurantForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const { onClickRestaurantAdd, loading, message, err } = props;

  return (
    <form onSubmit={handleSubmit(onClickRestaurantAdd)}>
      <h3 id="SY-h3">식당 추가</h3>
        <div className="form-check">
          <label className="form-check-label">
            <Field className="form-check-input" name="city" component="input" type="radio" value="인천" />
              인천
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <Field className="form-check-input" name="gu" component="input" type="radio" value="연수구" />
              연수구
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <Field className="form-check-input" name="dong" component="input" type="radio" value="송도동" />
              송도동
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label"><Field className="form-check-input" name="categorize" component="input" type="radio" value="한식" />한식</label>
          <label className="form-check-label"><Field className="form-check-input" name="categorize" component="input" type="radio" value="중식" />중식</label>
          <label className="form-check-label"><Field className="form-check-input" name="categorize" component="input" type="radio" value="일식" />일식</label>
          <label className="form-check-label"><Field className="form-check-input" name="categorize" component="input" type="radio" value="양식" />양식</label>
          <label className="form-check-label"><Field className="form-check-input" name="categorize" component="input" type="radio" value="분식" />분식</label>
          <label className="form-check-label"><Field className="form-check-input" name="categorize" component="input" type="radio" value="치킨" />치킨</label>
          <label className="form-check-label"><Field className="form-check-input" name="categorize" component="input" type="radio" value="피자" />피자</label>
          <label className="form-check-label"><Field className="form-check-input" name="categorize" component="input" type="radio" value="아시아퓨전" />아시아퓨전</label>
        </div>
        <Input id="restaurant_name" flex="col-4" name="name" component="input" type="text" placeholder="이름">
          식당 이름
        </Input>
        <Input id="restaurant_phone" flex="col-4" name="phone" component="input" type="text" placeholder="032-123-1234">
          전화번호
        </Input>
        <Input id="restaurant_address" flex="col-7" name="address" component="input" type="text" placeholder="주소">
          주소
        </Input>
        <div className="form-group">
          <label>좌표</label>
          <div className="row">
            <div className="col-3">
              <Field className="form-control" name="lat" component="input" type="number" placeholder="lat" />
            </div>
            <div className="col-3">
              <Field className="form-control" name="lon" component="input" type="number" placeholder="lon" />
            </div>
          </div>
        </div>
        <div>
          <label>영업 시간</label>
          <div className="row">
            <div className="col-3">
              <Field className="form-control" name="storehourStart" component="input" type="time" placeholder="시작 시간" />
            </div>
            <div className="col-3">
              <Field className="form-control" name="storehourEnd" component="input" type="time" placeholder="마감 시간" />
            </div>
          </div>
        </div>
        <div className="form-check">
          <label>영업 날</label>
          <div className="row">
            <div className="col-2">
              <label className="form-check-label"><Field className="form-check-input" name="all" component="input" type="checkbox" /> 매일</label>
            </div>
            <label className="form-check-label"><Field className="form-check-input" name="mon" component="input" type="checkbox" /> 월</label>
            <label className="form-check-label"><Field className="form-check-input" name="tue" component="input" type="checkbox" /> 화</label>
            <label className="form-check-label"><Field className="form-check-input" name="wed" component="input" type="checkbox" /> 수</label>
            <label className="form-check-label"><Field className="form-check-input" name="thu" component="input" type="checkbox" /> 목</label>
            <label className="form-check-label"><Field className="form-check-input" name="fri" component="input" type="checkbox" /> 금</label>
            <label className="form-check-label"><Field className="form-check-input" name="sat" component="input" type="checkbox" /> 토</label>
            <label className="form-check-label"><Field className="form-check-input" name="sun" component="input" type="checkbox" /> 일</label>
          </div>
        </div>
        <div>
          <label>쿠폰</label>
          <div className="col-3">
            <label>브론즈 쿠폰</label>
            <Field className="form-control" name="bronzeCoupon" component="select">
              <option></option>
              <option value="10%">10%</option>
              <option value="음료수">음료수</option>
            </Field>
            <label>실버 쿠폰</label>
            <Field className="form-control" name="silverCoupon" component="select">
              <option></option>
              <option value="20%">20%</option>
              <option value="사이드메뉴">사이드메뉴</option>
            </Field>
            <label>골드 쿠폰</label>
            <Field className="form-control" name="goldCoupon" component="select">
              <option></option>
              <option value="30%">30%</option>
              <option value="40%">40%</option>
            </Field>
            <label>플래티넘 쿠폰</label>
            <Field className="form-control" name="platinumCoupon" component="select">
              <option></option>
              <option value="50%">50%</option>
              <option value="주메뉴">주메뉴</option>
            </Field>
          </div>
        </div>
        <div>
          <p id="SY-errMessage">{err}</p>
          <p id="SY-errMessage">{message}</p>
          <button id="SY-restForm" className="btn btn-primary" type="submit" disabled={pristine || submitting}>{loading ? 'loading' : '식당 추가' }</button>
          <button id="SY-restForm" className="btn btn-primary" disabled={pristine || submitting} onClick={reset}>초기화</button>
        </div>
    </form>
  );
};


export default reduxForm({
  form: 'restaurant'  // a unique identifier for this form
})(RestaurantForm);
