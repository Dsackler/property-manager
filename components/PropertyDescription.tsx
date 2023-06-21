'use client';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import UploadData from './UploadData';
import { AddTenant } from './addTenant';

//This sets the props to send back up to where this component is being used (setCreateProperty in AddProperty)
type PropertyDescriptionProps = {
  setCreateProperty: (CreateProperty: boolean) => void;
};

export const PropertyDescription = ({
  setCreateProperty,
}: PropertyDescriptionProps) => {
  const [address, setAddress] = useState('');

  return (
    <div className='bg-neutral-200 my-8 p-8 rounded-lg'>
      <div className='relative'>
        Property Description
        <button
          className='absolute top-0 right-0'
          onClick={(e) => {
            setCreateProperty(false);
          }}
        >
          <MdClose size={30} className='rounded-full hover:bg-neutral-400' />
        </button>
      </div>
      <div className='absolute my-2'>
        <textarea
          onChange={(e) => setAddress(e.target.value)}
          name='address'
          value={address}
          placeholder='Property Address'
          className='p-1 text-md rounded-md bg-white-200'
        ></textarea>
      </div>
      <div className='mt-20'>
        <UploadData uploadType='Property Image' />
        <UploadData uploadType='Lease' />
      </div>
      <div>
        <AddTenant />
      </div>
    </div>
  );
};
