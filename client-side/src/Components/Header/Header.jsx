import './Header.css'
import logo from '../../assets/FnM.jpg';
import { RiCustomerService2Line } from "react-icons/ri";

const Header = () => {
    return (
        <>
            <div className="container">
                <div className="logo-section">
                    <img src={logo} alt="logo" />
                </div>
                <div className="customer-care">
                    <div className="icon ">
                        <RiCustomerService2Line size={40} />
                        <h1 className='customer'>Customer Care</h1>
                    </div>
                    <p>
                    <a href="tel:+91 95400 08223">+91 95400 08223</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Header