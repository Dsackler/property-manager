'use client';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import UploadData from './UploadData';

//This sets the props to send back up to where this component is being used (setCreateProperty in AddProperty)
type PropertyDescriptionProps = {
  setCreateProperty: (CreateProperty: boolean) => void;
};

export const PropertyDescription = ({
  setCreateProperty,
}: PropertyDescriptionProps) => {
  return (
    <div className='bg-neutral-200 my-8 p-8 rounded-lg'>
      <div className='relative'>
        PropertyDescription
        <button
          className='absolute top-0 right-0'
          onClick={(e) => {
            setCreateProperty(false);
          }}
        >
          <MdClose size={30} className='rounded-full hover:bg-neutral-400' />
        </button>
      </div>
      <UploadData uploadType='Property Image' />
      <UploadData uploadType='Lease' />
    </div>
  );
};
