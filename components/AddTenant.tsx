'use client';
import React, { useState } from 'react';
import { TenantDescription } from './TenantDescription';

export const AddTenant = () => {
  const [addTenant, setAddTenant] = useState(false);
  return (
    <div className='flex flex-col justify-center items-center'>
      <button
        onClick={(e) => {
          setAddTenant(true);
        }}
        className='font-semibold rounded shadow px-6 bg-blue-600 text-neutral-100 hover:bg-blue-700'
      >
        Add Tenant
      </button>
      <div>
        {addTenant && <TenantDescription setAddTenant={setAddTenant} />}
      </div>
    </div>
  );
};
