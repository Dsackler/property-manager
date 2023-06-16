'use client';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

//This sets the props to send back up to where this component is being used (setCreateProperty in AddProperty)
type PropertyDescriptionProps = {
  setCreateProperty: (CreateProperty: boolean) => void;
};

export const PropertyDescription = ({
  setCreateProperty,
}: PropertyDescriptionProps) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [uploadData, setUploadData] = useState<any>(undefined);

  const handleOnChange = (event: React.FormEvent<HTMLFormElement>) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      const result = onLoadEvent.target?.result as string;
      setImageSrc(result);
      setUploadData(undefined);
    };

    const fileInput = event.currentTarget.elements.namedItem(
      'fileInput'
    ) as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      reader.readAsDataURL(fileInput.files[0]);
    }
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //stops page from refreshing when you press the button
    const formElement = e.currentTarget;
    const fileInput = Array.from(formElement.elements).find(
      (element: Element) => element.getAttribute('name') === 'fileInput'
    ) as HTMLInputElement | undefined;

    const formData = new FormData();

    const files = fileInput?.files;
    if (files && files.length > 0) {
      formData.append('file', files[0]);
    }

    formData.append('upload_preset', 'property-uploads');

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/dtuxxsa0p/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    ).then((r) => r.json());

    if (data.secure_url.substring(data.secure_url.length - 3) === 'pdf') {
      data.secure_url =
        data.secure_url.substring(0, data.secure_url.length - 3) + 'jpg';
    }

    setImageSrc(data.secure_url);
    setUploadData(data.original_filename);
  };

  return (
    <div>
      <div>
        PropertyDescription
        <button
          onClick={(e) => {
            setCreateProperty(false);
          }}
        >
          <MdClose size={30} className='rounded-full hover:bg-slate-400' />
        </button>
      </div>
      <main className='flex flex-col border justify-center items-center text-center p-2'>
        <p className='m-4'>Upload your image to Cloudinary!</p>

        <form
          className='p-1 border-solid'
          method='post'
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        >
          <p>
            <input type='file' name='fileInput' />
          </p>

          <img src={imageSrc} height={300} width={300} />

          {imageSrc && !uploadData && (
            <p>
              <button
                type='submit'
                className='font-semibold rounded shadow px-6 mt-4 bg-blue-600 text-neutral-100 hover:bg-blue-700'
              >
                Upload Files
              </button>
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
