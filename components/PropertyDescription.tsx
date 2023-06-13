import React from 'react';

//This sets the props to send back up to where this component is being used (setCreateProperty in AddProperty)
type PropertyDescriptionProps = {
  setCreateProperty: (CreateProperty: boolean) => void;
};

export const PropertyDescription = ({
  setCreateProperty,
}: PropertyDescriptionProps) => {
  return (
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
  );
};
