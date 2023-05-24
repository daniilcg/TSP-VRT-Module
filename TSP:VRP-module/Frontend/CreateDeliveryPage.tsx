// CreateDeliveryPage.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { createDelivery } from '../api/delivery';

const CreateDeliveryPage: React.FC = () => {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = async (data: FormData) => {
    await createDelivery(data);
    // обработка успешного создания посылки
  };

  return (
    <div>
      <h1>Create Delivery</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name')} />
        <input type="text" {...register('address')} />
        <button type="submit" disabled={formState.isSubmitting}>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateDeliveryPage;
