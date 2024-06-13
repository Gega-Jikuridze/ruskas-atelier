import { useEffect, useState } from "react";
import useProductRequest from "../../hooks/useRequest";
import useFetch from "../../hooks/useFetch";

const SetAboutMe = () => {
  const [firstInfo, setFirstInfo] = useState("");
  const [secondInfo, setSecondInfo] = useState("");
  const [thirdInfo, setThirdInfo] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [id, setId] = useState("");
  const [, setImageFile] = useState(null);

  const { sendRequest: sendAboutMeRequest } = useProductRequest({
    url: "https://crudapi.co.uk/api/v1/about-me",
    method: "POST",
  });

  const { fetchRequest: fetchAboutMeRequest } = useFetch({
    url: "https://crudapi.co.uk/api/v1/about-me",
    method: "GET",
  });

  const { sendRequest: editAboutMeRequest } = useProductRequest({
    method: "PUT", // Method PUT should be configured in useProductRequest hook
  });

  useEffect(() => {
    if (fetchAboutMeRequest?.items && fetchAboutMeRequest.items.length > 0) {
      const data = fetchAboutMeRequest.items[0];
      setFirstInfo(data.firstInfo || "");
      setSecondInfo(data.secondInfo || "");
      setThirdInfo(data.thirdInfo || "");
      setImageUrl(data.imageUrl || null);
      setId(data._uuid || "");
    }
  }, [fetchAboutMeRequest]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstInfo,
      secondInfo,
      thirdInfo,
      imageUrl,
    };

    try {
      if (id) {
        const url = `https://crudapi.co.uk/api/v1/about-me/${id}`;
        await editAboutMeRequest(formData, url);
      } else {
        await sendAboutMeRequest([formData]);
      }
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const imageHandler = async (e) => {
    const file = e.target.files[0];

    try {
      const formData = new FormData();
      formData.append("file", file);
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
      setImageUrl(data.secure_url);
      setImageFile(file);
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
    }
  };

  return (
    <div className="about-me-edit">
      <form className="about-me-form" onSubmit={onSubmit}>
        <input type="file" onChange={imageHandler} accept="image/*" />
        {imageUrl && (
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "100px" }} />
        )}
        <label htmlFor="firstInfo">
          First Content
          <textarea
            id="firstInfo"
            value={firstInfo}
            onChange={(e) => setFirstInfo(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="secondInfo">
          Second Content
          <textarea
            id="secondInfo"
            value={secondInfo}
            onChange={(e) => setSecondInfo(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="thirdInfo">
          Third Content
          <textarea
            id="thirdInfo"
            value={thirdInfo}
            onChange={(e) => setThirdInfo(e.target.value)}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SetAboutMe;
