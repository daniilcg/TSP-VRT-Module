// DeliveryListPage.tsx
import React from 'react';
import { useQuery } from 'react-query';
import { getDeliveries } from '../api/delivery';

const DeliveryListPage: React.FC = () => {
  const { data: deliveries, isLoading, isError } = useQuery('deliveries', getDeliveries);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading deliveries</div>;
  }

  return (
    <div>
      <h1>Delivery List</h1>
      <ul>
        {deliveries.map((delivery) => (
          <li key={delivery.id}>{delivery.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryListPage;
