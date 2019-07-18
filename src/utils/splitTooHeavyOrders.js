/**
 * Découpe les commande trop lourde, plus de 30 kilos,
 * en générant de nouvelles commande.
 * @param  {Object[]} orders Commande comportant le poid de chaque produit
 * @return {Object[]}        Liste des colis
 */
const splitTooHeavyOrders = orders => {
  const parcels = [];
  orders.forEach(order => {
    // console.log(orders);
    const cloneItems = [...order.items];
    while (cloneItems.length > 0) {
      let weight = 0;
      let i = 0;
      // const filtered = [];
      const itemsToAddInParcel = [];
      const indexToRemove = [];
      while (i < cloneItems.length) {
        weight += +cloneItems[i].weight;
        indexToRemove.push(i);
        itemsToAddInParcel.push(cloneItems[i]);
        if (weight > 30) {
          itemsToAddInParcel.pop();
          parcels.push({ ...order, items: itemsToAddInParcel });
          break;
        }
        i += 1;
      }
      // cloneItems.splice(1, 1);
      itemsToAddInParcel.forEach(itemToAddInParcel => {
        const index = cloneItems
          .map(cloneItem => cloneItem.weight)
          .indexOf(itemToAddInParcel.weight);
        if (index > -1) {
          cloneItems.splice(index, 1);
        }
      });
    }
  });
  return orders;
};

// TODO dabord géré les produits les plus lourds pour réduire les couts

export default splitTooHeavyOrders;
