/* eslint-disable no-param-reassign */
/**
 * Découpe les commande contenant plus de 30 kilos de marchandise
 * en plusieurs colis optimisé
 * @param  {Object[]} orders Commande comportant le poid de chaque produit
 * @return {Object[]}        Liste des colis
 */
const splitTooHeavyOrders = orders => {
  const parcels = [];
  orders.forEach(order => {
    order.items.forEach(currentItem => {
      if (currentItem.dispatched === false) {
        let { weight } = currentItem;
        const itemToAddInParcel = [currentItem];
        currentItem.dispatched = true;

        order.items.forEach((item, index) => {
          if (item.dispatched === false && weight + item.weight < 30) {
            weight += item.weight;
            itemToAddInParcel.push(item);
            order.items[index].dispatched = true;
          }
        });

        parcels.push({
          order_id: order.id,
          items: itemToAddInParcel,
          weight
        });
      }
    });
  });
  return parcels;
};

export default splitTooHeavyOrders;
