import productImage from "../assets/product.png";

const Products = () => {
  const product = [
    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
      genger: 'female',
      color: 'red'
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },

    {
      image: productImage,
      title: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <div className="products container">
      <h1>ყველა</h1>
      <div className="product-cards">
        {product.map((el, index) => (
          <div className="product-card" key={index}>
            <img src={el.image} alt="" />
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
