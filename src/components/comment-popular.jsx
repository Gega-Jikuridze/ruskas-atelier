import { useState } from "react";
import Image from "../assets/image 15.png";
import Contact from "../components/contact";

const CommentPopular = () => {
  const [modal, setModal] = useState(false);

  // open contact form

  const handleClick = (event) => {
    event.preventDefault();

    setModal(!modal);
    console.log(modal);
  };

  // close  form
  const handleClose = () => {
    setModal(false);
  };

  return (
    <section className="comment-popular-section">
      <div className="comment-popular container">
        <div className="comment">
          <h1>
            ადგილი სადაც თქვენი <br /> სურვილები იქცევა რეალობად
          </h1>
          <button onClick={handleClick}>დატოვეთ საქონტაქტო ინფორმაცია</button>
          {modal ? <Contact onClose={handleClose} /> : null}
        </div>

        <div className="popular">
          <div className="popular-images">
            <img src={Image} alt="" />
            <img src={Image} alt="" />
            <img src={Image} alt="" />
          </div>
          <h1>პოპულარული პროდუქცია</h1>
        </div>
      </div>
    </section>
  );
};

export default CommentPopular;
