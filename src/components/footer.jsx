import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-component">
      <div className="footer container">
        <div className="footer-logo">
          <a href="#header">
            {" "}
            <img src={Logo} alt="Logo" />
          </a>
        </div>

        <div className="footer-nav">
          <div className="footer-first-nav">
            <h1>რუსუდან ქვრივიშვილი</h1>
            <h1>
              <i className="bx bxs-phone"></i>599 25 82 38
            </h1>
          </div>

          <div className="footer-second-nav">
            <h1>
              <i className="bx bxs-location-plus"></i>ქარელი
            </h1>
            <h1>
              <i className="bx bx-envelope"></i>rusoqvrivishvili@gmail.com
            </h1>
          </div>

          <div className="footer-third-nav">
          <a href="https://www.facebook.com/people/Rus-Ka/100067983346763/" target="_blank">
          <h1>
              <i className="bx bxl-facebook-circle"></i> Follow Us
          </h1>
          </a>

          <a href="https://www.instagram.com/__ruska1/?igsh=MXR0aWo4dnJscXNtaA%3D%3D&fbclid=IwZXh0bgNhZW0CMTAAAR3wWWCKGpHTVFc6rlcX4ZEAtjemz7ibCIAaw8RT3YIsVdKe61TE6VVryPU_aem_AaRZhE2zs9AH2P_gNzDyRnT6MZnb69xoll9aCRTEIoOd3bvs-grHzfz1XfZv5rih_27IIPSkCf21_CNJ8YBJtSfv" target="_blank">
          <h1>
            <i className='bx bxl-instagram'></i>Follow Us
          </h1>
          </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
