import { useState } from 'react';
import React from 'react';
import Dropzone from 'react-dropzone';
function addPlant() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="outer-div">
      <div className="add-plant-image-div">
        <Dropzone onDrop={acceptedFiles => setSelectedImage(acceptedFiles[0])}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {selectedImage && (
                <img
                src={URL.createObjectURL(selectedImage)}
                className="add-plant-image"
                width={400}
                height={400}
                />
                )}
                {
                  (!selectedImage) && (

                    <p>Drag and drop an image here, or click to select an image</p>
                  )
                }
            </div>
          )}
        </Dropzone>
      </div>
      <form onClick={e => e.preventDefault()} className="add-plant-form">
        <label htmlFor="">Plant Name</label>
        <input type="form" placeholder="Name" className="input" />
        <label htmlFor="">Plant Price</label>
        <input type="form" placeholder="Price" className="input" />
        <label htmlFor="">Description</label>

        <textarea type="form" placeholder="Description" className="input" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default addPlant;
