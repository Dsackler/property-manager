'use client';
import React, { useState } from 'react';

//This sets the props to send back up to where this component is being used (setCreateProperty in AddProperty)
type PropertyDescriptionProps = {
  setCreateProperty: (CreateProperty: boolean) => void;
};

export const PropertyDescription = ({
  setCreateProperty,
}: PropertyDescriptionProps) => {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const newValue = e.target.value;
    reader.onload = function (onLoadEvent) {
      setImageSrc(React.onLoadEvent.target.result);
      setUploadData(undefined);
    };
  };

  // function handleOnChange(changeEvent) {
  //   const reader = new FileReader()

  //   reader.onload = function(onLoadEvent) {
  //     setImageSrc(onLoadEvent.target.result)
  //     setUploadData(undefined)
  //   }
  // }

  function handleOnSubmit() {}

  return (
    <div>
      <div>
        PropertyDescription
        <button
          onClick={(e) => {
            setCreateProperty(false);
          }}
        >
          exit
        </button>
      </div>
      File upload
      <main className='flex flex-col justify-center items-center text-center p-2'>
        <h1 className='m-0 text-4xl'>Image Uploader</h1>

        <p className='m-4'>Upload your image to Cloudinary!</p>

        <form
          className='p-1 border-solid'
          method='post'
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        >
          <p>
            <input type='file' name='file' />
          </p>

          <img src='' />

          {imageSrc && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}

          {uploadData && (
            <code>
              <pre>{JSON.stringify(uploadData, null, 2)}</pre>
            </code>
          )}
        </form>
      </main>
    </div>
  );
};
