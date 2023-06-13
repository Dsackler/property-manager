import React from 'react';
import Image from 'next/image';

const ListProperties = () => {
  return (
    <div className='relative border'>
      <div className='absolute bottom-2 bg-slate-200'>
        <h3>Property Address</h3>
        <p className='break-all'>Property Name</p>
      </div>
      <Image
        className='rounded-sm'
        src='/Industrial_Building.jpg'
        alt=''
        width={300}
        height={300}
      />
    </div>
  );
};

export default ListProperties;
