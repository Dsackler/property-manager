import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

type PropertyDescriptionProps = {
  setAddTenant: (AddTenant: boolean) => void;
};

export const TenantDescription = ({
  setAddTenant,
}: PropertyDescriptionProps) => {
  const [tenant, setTenant] = useState('');
  const [rent, setRent] = useState('');

  return (
    <div className='flex flex-col'>
      <div className='relative'>
        <button
          className='absolute top-0 right-0'
          onClick={(e) => {
            setAddTenant(false);
          }}
        >
          <MdClose size={30} className='rounded-full hover:bg-neutral-400' />
        </button>
      </div>
      <div>
        <textarea
          onChange={(e) => setTenant(e.target.value)}
          name='tenant'
          value={tenant}
          placeholder='Tenant'
          className='p-1 mt-8 text-md rounded-md bg-white-200'
        ></textarea>
      </div>
      <div>
        <textarea
          onChange={(e) => setTenant(e.target.value)}
          name='rent'
          value={rent}
          placeholder='Rent'
          className='p-1 mt-8 text-md rounded-md bg-white-200'
        ></textarea>
      </div>
    </div>
  );
};
