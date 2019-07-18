import axios from 'axios';

const generateTrackingNumbers = async parcels => {
  const tracking = parcels.map(async parcelWithPaletteNumber => {
    const response = await axios.post('https://helloacm.com/api/random/?n=15​');
    return {
      ...parcelWithPaletteNumber,
      tracking_id: response.data
    };
  });
  const parcelsWithTracking = await Promise.all(tracking);
  return parcelsWithTracking;
};

export default generateTrackingNumbers;
