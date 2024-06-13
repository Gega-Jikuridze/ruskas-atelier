import useAbout from "../../hooks/useAbout";

const SetAboutMe = () => {
  const {onFormSubmit, aboutMeRef, titleRef, loading } = useAbout();

  return (
    <div className="about-me-edit">
      <form className="about-me-form" onSubmit={onFormSubmit}>
        <input type="text" placeholder="Title" ref={titleRef}/>
        <textarea className="about-text" placeholder="About me" ref={aboutMeRef}></textarea>
        <input type="submit" />
      </form>
    </div>
  );
};

export default SetAboutMe;
