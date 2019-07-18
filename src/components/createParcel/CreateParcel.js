/* eslint-disable no-loop-func */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import mergeOrdersWithItems from '../../utils/mergeOrdersWithItems';
import splitTooHeavyOrders from '../../utils/splitTooHeavyOrders';
import generatePaletteNumbers from '../../utils/generatePaletteNumbers';
import { orders } from '../../mock/orders.json';
import { items } from '../../mock/items.json';

const Parcels = () => {
  useState(() => {
    const ordersWithItems = mergeOrdersWithItems(orders, items);
    const splittedOrders = splitTooHeavyOrders(ordersWithItems);
    const parcels = generatePaletteNumbers(splittedOrders);
    console.log(parcels);
  });
  return <div></div>;
};

export default Parcels;
