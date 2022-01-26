import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa"

const Footer = () => {

    return (
        <div className={`container`}>
            <div className={`flex flex-col sm:flex-row justify-between items-center mt-10 sm:mt-20 mb-5`}>
                {/* logo */}
                <img className="cursor-pointer py-4" src={logo} alt="ultrav" />

                {/* navigation */}
                <nav className="flex flex-col md:flex-row text-center md:text-left">
                    <div className="mx-5 cursor-pointer">About</div>
                    <div className="mx-5 cursor-pointer">Products</div>
                    <div className="mx-5 cursor-pointer">News & Events</div>
                    <div className="mx-5 cursor-pointer">Contact Us</div>
                </nav>

                {/* social */}
                <div className={`flex`}>
                    <div className={`border border-white p-3 rounded-full hover:text-grey-dark hover:border-greytext-grey-dark hover:bg-white`} href="#">
                        <FaFacebookF />
                    </div>
                    <div className={`mx-4 border border-white p-3 rounded-full hover:text-grey-dark hover:border-greytext-grey-dark hover:bg-white`} href="#">
                        <FaInstagram />
                    </div>
                    <div className={`border border-white p-3 rounded-full hover:text-grey-dark hover:border-greytext-grey-dark hover:bg-white`} href="#">
                        <FaTelegramPlane />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;