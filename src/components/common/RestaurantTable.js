import React from 'react';
import RestaurantTableItem from './RestaurantTableItem';

const RestaurantTable = ({ data }) => {
  const RestaurantTables = data.map(restaurant => {
    return (
      <RestaurantTableItem
        key={restaurant.uid}
        data={restaurant}
      />
    );
  });

  return (
    <tbody>
      {RestaurantTables}
    </tbody>
  );
};

export { RestaurantTable };
