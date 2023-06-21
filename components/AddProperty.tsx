'use client';
import React, { useState } from 'react';
import { PropertyDescription } from './PropertyDescription';

const AddProperty = () => {
  const [createProperty, setCreateProperty] = useState(false);

  return (
    <div className='flex flex-col justify-center items-center mt-2'>
      <button
        onClick={(e) => {
          setCreateProperty(true);
        }}
        className='font-semibold rounded shadow px-6 py-3 mt-20 bg-blue-600 text-neutral-100 hover:bg-blue-700'
      >
        Add Property
      </button>
      <div>
        {createProperty && (
          <PropertyDescription setCreateProperty={setCreateProperty} />
        )}
      </div>
    </div>
  );
};

export default AddProperty;
