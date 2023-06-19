import React, { useState } from 'react';

type uploadData = {
  uploadType: string;
};

const UploadData = ({ uploadType }: uploadData) => {
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

    //if its a pdf, show the jpg version which is saved in cloudinary
    if (data.secure_url.substring(data.secure_url.length - 3) === 'pdf') {
      data.secure_url =
        data.secure_url.substring(0, data.secure_url.length - 3) + 'jpg';
    }

    setImageSrc(data.secure_url);
    setUploadData(data.original_filename);
  };

  return (
    <div>
      <main className='flex flex-col border justify-center items-center text-center p-2'>
        <p className='m-4'>Upload your {uploadType}</p>

        <form
          className='p-1 border-solid'
          method='post'
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        >
          <p>
            <input
              className='bg-white rounded-md'
              type='file'
              name='fileInput'
            />
          </p>

          {/* <img src={imageSrc} height={300} width={300} /> */}

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
              <img src={imageSrc} height={300} width={300} />
              {/* <pre>{JSON.stringify(uploadData, null, 2)}</pre> */}
            </code>
          )}
        </form>
      </main>
    </div>
  );
};

export default UploadData;
