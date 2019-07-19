/* eslint-disable no-loop-func */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import mergeOrdersWithItems from '../../utils/mergeOrdersWithItems';
import splitTooHeavyOrders from '../../utils/splitTooHeavyOrders';
import generatePaletteNumbers from '../../utils/generatePaletteNumbers';
import generateTrackingNumbers from '../../utils/generateTrackingNumbers';
import getOperationRemuneration from '../../utils/getOperationRemuneration';

import { orders } from '../../mock/orders.json';
import { items } from '../../mock/items.json';

const JsonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 80px;
`;

const JsonElement = styled.div`
  background-color: #e8eaf6;
  padding: 30px;
  margin: 30px;
`;
const Parcels = () => {
  const [parcels, setParcels] = useState([]);
  const [operationRemuneration, setOperationRemuneration] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ordersWithItems = mergeOrdersWithItems(orders, items);
    const splittedOrders = splitTooHeavyOrders(ordersWithItems);
    const parcelsWithPaletteNumber = generatePaletteNumbers(splittedOrders);

    setOperationRemuneration(
      getOperationRemuneration(parcelsWithPaletteNumber)
    );

    console.log('Parcels without tracking', parcelsWithPaletteNumber);
    console.log(
      `Rémunération totale de l'opération ${operationRemuneration} €`
    );
    generateTrackingNumbers(parcelsWithPaletteNumber).then(response => {
      setParcels(response);
      setLoading(false);
      console.log('Parcels with tracking', response);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: 20 }}>
      {loading ? (
        <h1>Chargement en cours ....</h1>
      ) : (
        <>
          <h1 style={{ textAlign: 'center' }}>
            Rémunération totale de l&lsquo;opération
            <br />
            {operationRemuneration} €
          </h1>
          <h3>Nombre de colis : {parcels.length}</h3>
          <h3>
            Nombre de palettes : {parcels[parcels.length - 1].palette_number}
          </h3>
          <JsonContainer>
            {parcels.map((parcel, index) => (
              <JsonElement key={index}>
                <pre>{JSON.stringify(parcel, null, 2)}</pre>
              </JsonElement>
            ))}
          </JsonContainer>
        </>
      )}
    </div>
  );
};

export default Parcels;
