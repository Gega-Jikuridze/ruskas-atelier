import Header from './header'
import Logo from '../assets/logo.png'

const Footer = () => {


    return <footer className="footer-component">
            <div className="footer container">
                <div className="footer-logo">
                  <a href="#header"> <img src={Logo} alt="Logo" /></a> 
                </div>

                <div className="footer-nav">
                    <div className="footer-first-nav">
                        <h1>რუსუდან ქვრივიშვილი</h1>
                        <h1><i className='bx bxs-phone' ></i>599 25 82 38</h1>
                        
                    </div>
                    
                    <div className="footer-second-nav">
                        <h1><i className='bx bxs-location-plus' ></i>ქარელი</h1>                     
                        <h1><i className='bx bx-envelope' ></i>rusoqvrivishvili@gmail.com</h1>
                    </div>
                    
                    <h1><i className='bx bxl-facebook-circle' ></i>Follow Us</h1>
                </div>

            </div>
    </footer>
}


export default Footer