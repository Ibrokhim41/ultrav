import { IoCloseOutline } from "react-icons/io5"
import { useEffect } from "react"
import uz from "../../assets/uz.png";
import ru from "../../assets/ru.png";
import en from "../../assets/en.png";
import { useHistory } from "react-router-dom";
// import { useTranslation } from 'react-i18next';

const Menu = ({ show, setShow }) => {

    // const { t, i18n } = useTranslation();
    const navigate = useHistory();

    useEffect(() => {
        show ? (document.body.style = "overflow: hidden")
            : (document.body.style = "overflow: auto")
    }, [show])

    return (
        <div className={`${show ? "opacity-100 z-50" : "opacity-0 -z-10"} transition-all duration-1000 absolute top-0 left-0 w-screen h-screen bg-grey-dark`}>
            <IoCloseOutline
                onClick={() => setShow(false)}
                style={{ fontSize: "44px" }}
                className="absolute top-5 right-5 text-white text-title"
            />
            <ul className="w-full h-full flex flex-col justify-center items-center">
                <li
                    onClick={() => {
                        navigate.push("/about")
                        setShow(false)
                    }}
                    style={{ fontSize: "24px" }}
                    className="text-white py-2">
                    <div href="">
                        {/* {t("top.about")} */}About
                    </div>
                </li>
                <li
                    onClick={() => {
                        navigate.push("/products")
                        setShow(false)
                    }}
                    style={{ fontSize: "24px" }}
                    className="text-white py-2">
                    <div href="">
                        {/* {t("top.products")} */}Products
                    </div>
                </li>
                <li
                    style={{ fontSize: "24px" }}
                    className="text-white py-2">
                    <div href="">
                        {/* {t("top.news")} */}News & Events
                    </div>
                </li>
                <li
                    onClick={() => {
                        navigate.push("/contacts")
                        setShow(false)
                    }}
                    style={{ fontSize: "24px" }}
                    className="text-white py-2">
                    <div href="">
                        {/* {t("top.contacts")} */} Contacts
                    </div>
                </li>
            </ul>

            {/* language */}
            <div className="absolute bottom-20">
                <div className="w-screen flex justify-center">
                    <button
                        // onClick={() => i18n.changeLanguage("uz")}
                        style={{ backgroundImage: `url('${uz}')` }}
                        className="w-8 h-8 bg-center bg-cover rounded-full mx-1 cursor-pointer shadow-md">
                    </button>
                    <button
                        // onClick={() => i18n.changeLanguage("ru")}
                        style={{ backgroundImage: `url('${ru}')` }}
                        className="w-8 h-8 bg-center bg-cover rounded-full mx-1 cursor-pointer shadow-md">
                    </button>
                    <button
                        // onClick={() => i18n.changeLanguage("en")}
                        style={{ backgroundImage: `url('${en}')` }}
                        className="w-8 h-8 bg-center bg-cover rounded-full mx-1 cursor-pointer shadow-md">
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Menu;