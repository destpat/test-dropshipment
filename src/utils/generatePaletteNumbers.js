/* eslint-disable no-plusplus */
/**
 * Ajoute un numéro de palette à chaque colis,
 * une palette peux contenir au maximum 15 colis
 * @param  {[Object[]]} parcels [description]
 * @return {[Object[]]}         Colis avec numéros de palette
 */
const generatePaletteNumbers = parcels =>
  parcels.map((parcel, index) => ({
    ...parcel,
    palette_number: Math.floor(index / 15)
  }));

export default generatePaletteNumbers;
