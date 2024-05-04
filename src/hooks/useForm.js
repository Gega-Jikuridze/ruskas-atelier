import { useRef } from "react";

const useForm = () => {
  const userNameRef = useRef(null);
  const userLastNameRef = useRef(null);
  const userNumberRef = useRef(null);
  const userEmailRef = useRef(null);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const userName = userNameRef.current.value;
    const userLastName = userLastNameRef.current.value;
    const userNumber = userNumberRef.current.value;
    const userEmail = userEmailRef.current.value;

    const User = {
      userName: userName,
      userLastName: userLastName,
      phoneNumber: userNumber,
      userEmail: userEmail,
    };

    console.log(User);

    if (userNameRef.current) userNameRef.current.value = "";
    if (userLastNameRef.current) userLastNameRef.current.value = "";
    if (userNumberRef.current) userNumberRef.current.value = "";
    if (userEmailRef.current) userEmailRef.current.value = "";
  };

  return {
    userNameRef,
    userLastNameRef,
    userNumberRef,
    userEmailRef,
    onFormSubmit,
  };
};

export default useForm;
