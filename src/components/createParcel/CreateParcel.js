/* eslint-disable no-loop-func */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import mergeOrdersWithItems from '../../utils/mergeOrdersWithItems';
import splitTooHeavyOrders from '../../utils/splitTooHeavyOrders';
import { orders } from '../../mock/orders.json';
import { items } from '../../mock/items.json';

const Parcels = () => {
  useState(() => {
    const ordersWithItems = mergeOrdersWithItems(orders, items);
    // console.log(ordersWithItems);
    let parcels = [];
    ordersWithItems.forEach(order => {
      for (let i = 0; i < order.items.length; i++) {
        /**
         *  Nous avons uniquement les produits qui ne sont
         *  pas déja dispacher dans des colis
         */
        if (order.items[i].dispatched === false) {
          let { weight } = order.items[i];
          const itemToAddInParcel = [order.items[i]];
          order.items[i].dispatched = true;
          order.items.forEach((item, index) => {
            if (item.dispatched === false && weight + item.weight < 30) {
              weight += item.weight;
              itemToAddInParcel.push(item);
              order.items[index].dispatched = true;
            }
          });
          parcels.push(itemToAddInParcel);
        }
      }
    });
    console.log(parcels);
  });
  return <div></div>;
};

export default Parcels;
