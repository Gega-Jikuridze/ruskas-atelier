import React, { useRef, useState } from "react";
import UploadWidget from "./UploadWidget";
import useProductRequest from "../../hooks/useRequest";

const ImageUploader = () => {
  const [url, updateUrl] = useState();
  const [, updateError] = useState();
  const selectedValueRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleOnUpload = (error, result, widget) => {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    updateUrl(result?.info?.secure_url);
  };

  const { loading, sendRequest } = useProductRequest({
    url: "https://crudapi.co.uk/api/v1/products",
    method: "POST",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (url) {
      console.log(url);
    } else {
      window.alert("Please choose Photo");
    }

    const newProduct = {
      Category: selectedValueRef.current.value,
      Title: titleRef.current.value,
      Description: descriptionRef.current.value,
      image: url,
    };
    sendRequest([newProduct]);

    titleRef.current.value=''
    descriptionRef.current.value=''
    selectedValueRef.current.value = ''
    updateUrl('')
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="პროდუქცია" ref={titleRef} required />
        <input type="text" placeholder="აღწერა" ref={descriptionRef} required />
        <select id="Category" ref={selectedValueRef} required>
          <option value="">აირჩიე კატეგორია</option>
          <option value="woman">ქალი</option>
          <option value="man">კაცი</option>
          <option value="kid">ბავშვი</option>
          <option value="charch">საეკლესიო</option>
          <option value="national">ნაციონალური</option>
        </select>
        <UploadWidget onUpload={handleOnUpload}>
          {({ open }) => {
            const handleOnClick = (e) => {
              e.preventDefault();
              setTimeout(() => {
                console.log(open());
              }, 500);
              open();
            };
            return <button onClick={handleOnClick}>Upload Image</button>;
          }}
        </UploadWidget>
        <button type="submit">დამატება</button>
      </form>
      {url && <img style={{ width: 200, height: 200 }} src={url} alt="" />}
    </>
  );
};

export default ImageUploader;
