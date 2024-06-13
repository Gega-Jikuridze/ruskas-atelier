import { useRef } from "react";
import useProductRequest from "./useRequest";

const useForm = () => {
  const titleRef = useRef(null);
  const aboutMeRef = useRef(null);

  const { loading, sendRequest } = useProductRequest({
    url: "https://crudapi.co.uk/api/v1/users",
    method: "POST",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const aboutMe = aboutMeRef.current.value;

    sendRequest([{ title, aboutMe }]);

    if (titleRef.current) titleRef.current.value = "";
    if (aboutMeRef.current) aboutMeRef.current.value = "";

  };

  return {
    aboutMeRef,
    titleRef,
    onFormSubmit,
    loading,
  };
};

export default useForm;
