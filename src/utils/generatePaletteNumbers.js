/* eslint-disable no-plusplus */
/**
 * Ajoute un numéro de palette à chaque colis,
 * une palette peux contenir au maximum 15 colis
 * @param  {[Object[]]} parcels [description]
 * @return {[Object[]]}         Colis avec numéros de palette
 */
const generatePaletteNumbers = parcels => {
  let currentPaletteNumber = 0;
  return parcels.map((parcel, index) => {
    if (index % 15 === 0) {
      currentPaletteNumber++;
    }
    return { ...parcel, palette_number: currentPaletteNumber };
  });
};

export default generatePaletteNumbers;
