import getParcelRemuneration from './getParcelRemuneration';

/**
 * Calcule la rémunération global de l'opération
 * @param  {Object[]} parcels Liste de colis
 * @return {Number}         Rémunération de l'opération
 */
const getOperationRemuneration = parcels =>
  parcels.reduce(
    (prev, parcel) => prev + getParcelRemuneration(parcel.weight),
    0
  );

export default getOperationRemuneration;
