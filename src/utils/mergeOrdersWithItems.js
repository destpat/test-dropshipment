/**
 * Création d'un tableau d'objets "parcel",
 * contenant les colis avec leurs contenus
 * @param  {Object[]} orders Liste de commandes
 * @param  {Object[]} items  Liste des produits
 * @return {Object[]}        Liste des colis avec leurs contenus
 */
const mergeOrdersWithItems = (orders, items) => {
  const parcel = orders.map(order => {
    const updatedItem = order.items.map(orderItem => {
      const currentItem = items.find(item => item.id === orderItem.item_id);
      return {
        ...orderItem,
        weight: currentItem.weight * 1,
        dispatched: false
      };
    });
    return {
      ...order,
      items: updatedItem
    };
  });
  return parcel;
};

export default mergeOrdersWithItems;
