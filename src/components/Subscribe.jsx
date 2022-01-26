import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa"

const Subscribe = () => {

    return (
        <div className={`container`}>
            <div className={`flex flex-col sm:flex-row justify-between items-center bg-blue-dark text-white rounded-lg p-4 sm:p-7 mt-20`}>
                <div className={`text-title mb-4 sm:mb-0`}>Subscribe</div>
                <div className={`flex`}>
                    <div className={`border border-white text-regular p-3 rounded-full hover:text-grey-dark hover:border-greytext-grey-dark hover:bg-white`} href="#">
                        <FaFacebookF />
                    </div>
                    <div className={`mx-4 border border-white text-regular p-3 rounded-full hover:text-grey-dark hover:border-greytext-grey-dark hover:bg-white`} href="#">
                        <FaInstagram />
                    </div>
                    <div className={`border border-white text-regular p-3 rounded-full hover:text-grey-dark hover:border-greytext-grey-dark hover:bg-white`} href="#">
                        <FaTelegramPlane />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;