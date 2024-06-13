import React, { useRef, useState } from "react";
import useProductRequest from "../../hooks/useRequest";

const ImageUploader = () => {
  const [urls, updateUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, updateError] = useState(null);
  const selectedValueRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const { sendRequest } = useProductRequest({
    url: "https://crudapi.co.uk/api/v1/products",
    method: "POST",
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (urls.length === 0) {
      window.alert("Please choose a photo");
      return;
    }

    const newProduct = {
      Category: selectedValueRef.current.value,
      Title: titleRef.current.value,
      Description: descriptionRef.current.value,
      image: urls.map((url) => url.cloudinaryUrl),
    };

    try {
      await sendRequest([newProduct]);
      titleRef.current.value = "";
      descriptionRef.current.value = "";
      selectedValueRef.current.value = "";
      updateUrls([]);
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  const imageHandler = async (e) => {
    const files = Array.from(e.target.files);
    const newUrls = files.map((file) => ({
      localUrl: URL.createObjectURL(file),
      cloudinaryUrl: null,
      file,
    }));

    updateUrls((prevUrls) => [...prevUrls, ...newUrls]);

    setLoading(true);
    updateError(null);

    try {
      for (const fileObj of newUrls) {
        const formData = new FormData();
        formData.append("file", fileObj.file);
        formData.append("upload_preset", "r0su9exk");

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dnf8xaj6f/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to upload image");
        }

        const data = await response.json();
        updateUrls((prevUrls) =>
          prevUrls.map((urlObj) =>
            urlObj.localUrl === fileObj.localUrl
              ? { ...urlObj, cloudinaryUrl: data.secure_url }
              : urlObj
          )
        );
      }
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      updateError("Failed to upload images. Please try again.");
    } finally {
      setLoading(false);
    }
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
        <input type="file" multiple onChange={imageHandler} />
        <button type="submit" disabled={loading}>
          დამატება
        </button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>
        {urls.map((urlObj, index) => (
          <img
            key={index}
            style={{ width: 200, height: 200, margin: "10px" }}
            src={urlObj.cloudinaryUrl || urlObj.localUrl}
            alt={`Uploaded #${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default ImageUploader;
