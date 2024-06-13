import image from "../assets/about-image.png";
import useFetch from "../hooks/useFetch";

const AboutUs = () => {
  const { fetchRequest } = useFetch({
    url: "https://crudapi.co.uk/api/v1/about-me",
    method: "GET",
  });

  const aboutMeContent = fetchRequest?.items[0];
  console.log(aboutMeContent);

  return (
    <div className="about-us container">
      <img
        src={fetchRequest ? aboutMeContent.imageUrl : image}
        alt="something"
      />
      {fetchRequest ? (
        <div className="about-us-text">
          <p>{aboutMeContent.firstInfo}</p>
          <p>{aboutMeContent.secondInfo}</p>
          <p>{aboutMeContent.thirdInfo}</p>
        </div>
      ) : (
        <div className="about-us-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
