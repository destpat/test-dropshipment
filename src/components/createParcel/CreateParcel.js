import React, { useState } from 'react';
import PropTypes from 'prop-types';
import mergeOrdersWithItems from '../../utils/mergeOrdersWithItems';
import splitTooHeavyOrders from '../../utils/splitTooHeavyOrders';
import { orders } from '../../mock/orders.json';
import { items } from '../../mock/items.json';

const Parcels = () => {
  useState(() => {
    const ordersWithItems = mergeOrdersWithItems(orders, items);
    console.log(ordersWithItems);

    let parcels = [];
    ordersWithItems.forEach(order => {
      let weight = 0;
      let itemsToAdd = [];
      // Trie le tableau pour avoir la plus grande valeur en premier
      order.items.sort((a, b) => (a.weight * 1 > b.weight * 1 ? 1 : -1));

      for (let i = 0; i < order.items.length; i++) {
        weight += order.items[i].weight * 1;
        itemsToAdd.push(order.items[i]);
        if (weight > 30) {
          itemsToAdd.pop();
          parcels.push({ ...order, items: itemsToAdd });
          itemsToAdd = [];
          weight = 0;
          i--;
        }
      }
      parcels.push({ ...order, items: itemsToAdd });
    });
    console.log(parcels);
  });
  return <div></div>;
};

export default Parcels;
