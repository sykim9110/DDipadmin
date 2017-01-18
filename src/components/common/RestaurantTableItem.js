import React from 'react';

const RestaurantTableItem = ({ data, key }) => {
  return (
    <tr>
      <th scope="row">1</th>
      <td>{data.name}</td>
      <td>{data.categorize}</td>
      <td>{data.admin.bronzeCoupon}</td>
      <td>{data.admin.silverCoupon}</td>
      <td>{data.admin.goldCoupon}</td>
      <td>{data.admin.silverCoupon}</td>
      <td><button>온</button></td>
    </tr>
  );
};

export { RestaurantTableItem };
