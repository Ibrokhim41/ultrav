import { useState } from 'react';
import { FiMenu } from 'react-icons/fi'
import logo from "../assets/logo.png";
import uz from "../assets/uz.png";
import ru from "../assets/ru.png";
import en from "../assets/en.png";
import Menu from "./Menu";
import { useHistory } from 'react-router-dom';


const Top = () => {

    const navigate = useHistory()
    const [show, setShow] = useState(false)

    return (
        <div className="bg-white shadow-md z-50">
            <div className="container flex justify-between items-center">
                {/* logo */}
                <img
                    onClick={() => navigate.push("/")}
                    className="logo cursor-pointer py-4" src={logo} alt="ultrav"
                />

                {/* navigation */}
                <nav className="hidden md:flex">
                    <div
                        onClick={() => navigate.push("/about")}
                        className="mx-5 cursor-pointer">
                        About
                    </div>
                    <div
                        onClick={() => navigate.push("/products")}
                        className="mx-5 cursor-pointer">
                        Products
                    </div>
                    <div className="mx-5 cursor-pointer">News & Events</div>
                    <div className="mx-5 cursor-pointer">Contact Us</div>
                </nav>

                {/* language */}
                <div className="hidden md:flex">
                    <button style={{ backgroundImage: `url('${uz}')` }} className="w-8 h-8 bg-center bg-cover rounded-full mx-1 cursor-pointer shadow-md"></button>
                    <button style={{ backgroundImage: `url('${ru}')` }} className="w-8 h-8 bg-center bg-cover rounded-full mx-1 cursor-pointer shadow-md"></button>
                    <button style={{ backgroundImage: `url('${en}')` }} className="w-8 h-8 bg-center bg-cover rounded-full mx-1 cursor-pointer shadow-md"></button>
                </div>

                {/* menu */}
                <FiMenu
                    onClick={() => { setShow(true) }}
                    className='cursor-pointer md:hidden text-title' />
                <Menu show={show} setShow={setShow} />
            </div >
        </div >
    )
}

export default Top;