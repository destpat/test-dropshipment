/**
 * Renvoie la rémunération selon le poid du colis
 * @param  {Number} weight Poid du colis
 * @return {Number}        Rémunération sur le colis
 */
const getParcelRemuneration = weight => {
  switch (true) {
    case weight < 1:
      return 1;
    case weight < 5:
      return 2;
    case weight < 10:
      return 3;
    case weight < 20:
      return 5;
    default:
      return 10;
  }
};

export default getParcelRemuneration;
