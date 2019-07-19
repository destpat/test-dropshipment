/**
 * Renvoie la rémunération selon le poid du colis
 * @param  {Number} weight Poid du colis
 * @return {Number}        Rémunération sur le colis
 */
const getParcelRemuneration = weight => {
  if (weight >= 0 && weight < 1) {
    return 1;
  }
  if (weight >= 1 && weight < 5) {
    return 2;
  }
  if (weight >= 5 && weight < 10) {
    return 3;
  }
  if (weight >= 5 && weight < 10) {
    return 5;
  }
  if (weight >= 10 && weight < 20) {
    return 10;
  }
  return 20;
};

export default getParcelRemuneration;
