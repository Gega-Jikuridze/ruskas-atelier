import useForm from "../hooks/useForm";

const Contact = ({ onClose }) => {
  const {
    onFormSubmit,
    userEmailRef,
    userLastNameRef,
    userNameRef,
    userNumberRef,
  } = useForm();

  //   const { loading, sendRequest } = useProductRequest({
  //     url: "",
  //     method: "POST",
  //   });

  return (
    <div>
      <div className="contact-form">
        <i className="bx bx-x-circle" onClick={onClose}></i>
        <h1>
          დატოვეთ თქვენი <br />
          საკონტაქტო ინფორმაცია
        </h1>
        <form onSubmit={onFormSubmit}>
          <input type="text" placeholder="სახელი" ref={userNameRef} required />
          <input
            type="text"
            placeholder="გვარი"
            ref={userLastNameRef}
            required
          />
          <input
            type="tel"
            placeholder="ტელეფონი"
            ref={userNumberRef}
            required
          />
          <input type="email" placeholder="მეილი" ref={userEmailRef} required />
          <input type="submit" value="შენახვა" className="contact-submit" />
        </form>
      </div>
      <div className="overlay" onClick={onClose}></div>
    </div>
  );
};

export default Contact;
