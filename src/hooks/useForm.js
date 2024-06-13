import { useRef } from "react";
import useProductRequest from "./useRequest";

const useForm = () => {
  const userDescr = useRef(null);
  const userNameRef = useRef(null);
  const userLastNameRef = useRef(null);
  const userNumberRef = useRef(null);
  const userEmailRef = useRef(null);

  const { loading, sendRequest } = useProductRequest({
    url: "https://crudapi.co.uk/api/v1/users",
    method: "POST",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    const name = userNameRef.current.value;
    const surname = userLastNameRef.current.value;
    const number = userNumberRef.current.value;
    const email = userEmailRef.current.value;
    const desc = userDescr.current.value;

    sendRequest([{ name, surname, number, email, desc }]);

    if (userNameRef.current) userNameRef.current.value = "";
    if (userLastNameRef.current) userLastNameRef.current.value = "";
    if (userNumberRef.current) userNumberRef.current.value = "";
    if (userEmailRef.current) userEmailRef.current.value = "";
    if (userDescr.current) userDescr.current.value = "";
  };

  return {
    userDescr,
    userNameRef,
    userLastNameRef,
    userNumberRef,
    userEmailRef,
    onFormSubmit,
    loading,
  };
};

export default useForm;
