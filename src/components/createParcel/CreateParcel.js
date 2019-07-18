import React, { useState } from 'react';
import PropTypes from 'prop-types';
import mergeOrdersWithItems from '../../utils/mergeOrdersWithItems';
import splitTooHeavyOrders from '../../utils/splitTooHeavyOrders';
import { orders } from '../../mock/orders.json';
import { items } from '../../mock/items.json';

const Parcels = () => {
  useState(() => {
    let ordersWitheItems = mergeOrdersWithItems(orders, items);
    let parcels = splitTooHeavyOrders(ordersWitheItems);
  });
  return <div></div>;
};

export default Parcels;
