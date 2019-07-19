/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */

/**
 * Fusionne les articles ayant le même id pour créer 1 seul
 * object avec une quantité
 * @param  {Object[]} itemsToMerge Articles à fusionner
 * @return {Object[]}              Articles fusionner
 */
const mergeItems = itemsToMerge => {
  const items = [];
  itemsToMerge.forEach(itemToAddInParcel => {
    const mergeItemIndex = items.findIndex(
      mergeItem => mergeItem.item_id === itemToAddInParcel.item_id
    );
    if (mergeItemIndex === -1) {
      items.push({
        item_id: itemToAddInParcel.item_id,
        quantity: itemToAddInParcel.quantity
      });
    } else {
      items[mergeItemIndex].quantity += 1;
    }
  });
  return items;
};

/**
 * Crée un object pour chacun des articles selon sa quantité
 * @param  {Object[]} items Liste des articles
 * @return {Object[]}       Produits selon la quantitée
 */
const createObjectForEachItem = items => {
  const allItems = [];
  items.forEach(item => {
    for (let i = 0; i < item.quantity; i++)
      allItems.push({ ...item, quantity: 1 });
  });
  return allItems;
};

/**
 * Découpe les commande contenant plus de 30 kilos de marchandise
 * en plusieurs colis optimisé
 * @param  {Object[]} orders Commande comportant le poid de chaque produit
 * @return {Object[]}        Liste des colis
 */
const splitTooHeavyOrders = orders => {
  const parcels = [];
  let items;
  orders.forEach(order => {
    order.items = createObjectForEachItem(order.items);
    // Trie du tableau selon le poid du produit dans un ordre décroissant
    order.items = order.items.sort((a, b) => (a.weight < b.weight ? 1 : -1));
    order.items.forEach(currentItem => {
      if (currentItem.dispatched === false) {
        let { weight } = currentItem;
        const itemsToAddInParcel = [currentItem];
        currentItem.dispatched = true;
        order.items.forEach((item, index) => {
          if (item.dispatched === false && weight + item.weight <= 30) {
            weight += item.weight;
            itemsToAddInParcel.push(item);
            // Indique de le produit à bien été mis dans un colis
            order.items[index].dispatched = true;
          }
        });
        items = mergeItems(itemsToAddInParcel);
        parcels.push({
          order_id: order.id,
          items,
          weight
        });
      }
    });
  });
  return parcels;
};

export default splitTooHeavyOrders;
