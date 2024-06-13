import { useState } from "react";
import Contact from "../components/contact";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const CommentPopular = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const { fetchRequest: ProductsImage } = useFetch({
    url: `https://crudapi.co.uk/api/v1/products`,
    method: "GET",
  });

  const Images = (ProductsImage?.items || [])
  .slice(0, window.innerWidth < 380 ? 2 : 3)
  .map((product) => ({
    image: product.image,
    id: product._uuid,
  }));

  

  const handleClick = (event) => {
    event.preventDefault();

    setModal(!modal);
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <section className="comment-popular-section container">
      <div className="comment-popular">
        <div className="comment">
          <h1>
            ადგილი სადაც თქვენი <br /> სურვილები იქცევა რეალობად
          </h1>
          <button onClick={handleClick}>დატოვეთ საქონტაქტო ინფორმაცია</button>
          {modal ? <Contact onClose={handleClose} /> : null}
        </div>

        <div className="popular">
          <div className="popular-images">
            {Images?.map((img) => (
              <div key={img.id} onClick={() => navigate(`products/${img.id}`)}>
                <img src={img.image[0]} alt="some" />
              </div>
            ))}
          </div>
          <h1>ახალი პროდუქცია</h1>
        </div>
      </div>
    </section>
  );
};

export default CommentPopular;
