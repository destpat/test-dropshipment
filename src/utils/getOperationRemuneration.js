import getParcelRemuneration from './getParcelRemuneration';

/**
 * Calcule la rémunération global de l'opération
 * @param  {Object[]} parcels Liste de colis
 * @return {Number}         Rémunération de l'opération
 */
const getOperationRemuneration = parcels => {
  let remuneration = 0;
  parcels.forEach(parcel => {
    remuneration += getParcelRemuneration(parcel.weight);
  });
  return remuneration;
};

export default getOperationRemuneration;
