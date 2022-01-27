import { BiPhone } from 'react-icons/bi';
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Oppening from "./Oppeing";
import Iframe from 'react-iframe'
import Subscribe from './Subscribe';
import { useTranslation } from 'react-i18next';


const ContactUs = () => {

    const {t} = useTranslation();

    return (
        <div className="container">
            <Oppening />
            <div className="text-title my-10">{t("top.contacts")}</div>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/3 px-3">
                    <div className='p-3 rounded-lg shadow-md'>
                        address
                        <div className='flex items-center mt-4'>
                            <MdOutlineLocationOn className="text-lg mr-2" />
                            <div>ул. Саади Сиражиддинова, 2</div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3">
                    <div className='p-3 mt-4 md:mt-0 rounded-lg shadow-md'>
                        phone
                        <div className="flex items-center mt-4">
                            <BiPhone className="text-lg mr-2" />
                            <div>
                                <a href="tel:+998990000000">+998 99 000 00 00</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3">
                    <div className='p-3 mt-4 md:mt-0 rounded-lg shadow-md'>
                        email
                        <div className="flex items-center mt-4 overflow-hidden">
                            <HiOutlineMail className="text-lg mr-2" />
                            <div>
                                <a href="emailto:ultravuzbekistan@gmail.com">ultravuzbekistan@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* map */}
            <div className='mt-10'>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.2192102454187!2d69.23453211525401!3d41.28233337927404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a5efb97699d%3A0x913c5685da352f76!2sSchool%20144!5e0!3m2!1sen!2s!4v1643265259109!5m2!1sen!2s"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    allowFullScreen='true'
                    display="initial"
                    position="relative" />
            </div>

            <Subscribe />
        </div>
    )
}

export default ContactUs;