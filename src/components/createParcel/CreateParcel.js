/* eslint-disable no-loop-func */
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import mergeOrdersWithItems from '../../utils/mergeOrdersWithItems';
import splitTooHeavyOrders from '../../utils/splitTooHeavyOrders';
import generatePaletteNumbers from '../../utils/generatePaletteNumbers';
import generateTrackingNumbers from '../../utils/generateTrackingNumbers';

import { orders } from '../../mock/orders.json';
import { items } from '../../mock/items.json';

const Parcels = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    const ordersWithItems = mergeOrdersWithItems(orders, items);
    const splittedOrders = splitTooHeavyOrders(ordersWithItems);
    const parcelsWithPaletteNumber = generatePaletteNumbers(splittedOrders);
    generateTrackingNumbers(parcelsWithPaletteNumber).then(response =>
      setParcels(response)
    );
  }, []);
  return (
    <div>
      <ul>
        {parcels.map(parcel => (
          <li key={parcel.tracking_id}>{parcel.tracking_id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Parcels;
