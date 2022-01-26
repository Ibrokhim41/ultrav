import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import { useWindowDimensions } from '../hooks/WindowSIze';
import product1 from "../assets/product1.jpg"
import product2 from "../assets/product2.jpg"
import product3 from "../assets/product3.jpg"
import product4 from "../assets/product4.jpg"
import product5 from "../assets/product5.jpg"
import product6 from "../assets/product6.jpg"

const Gallery = () => {

    const { width } = useWindowDimensions();

    const settings = {
        infinite: true,
        speed: 1200,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />, 
        prevArrow: <SamplePrevArrow />
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <button onClick={onClick} className={`${width < 525 && 'hidden'} absolute -top-20 right-12 border border-grey-dark text-grey-dark p-2 rounded-full hover:text-white hover:bg-red hover:border-red text-xl mx-1`}> <BsArrowLeftShort /> </button>
        );
    }
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <button onClick={onClick} className={`${width < 525 && 'hidden'} absolute -top-20 right-0 border border-grey-dark text-grey-dark p-2 rounded-full hover:text-white hover:bg-red hover:border-red text-xl mx-1`}> <BsArrowRightShort /> </button>
        );
    }

    return (
        <div className="container">
            <div className="flex justify-between items-center mt-20 mb-10">
                {/* title */}
                <div className="w-4/5">
                    <div className="text-title">Product's Gallery</div>
                    <p className="text-regular">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, tempora tenetur, quas aliquid maxime consequatur consectetur officia quo.</p>
                </div>
            </div>

            {/* products gallery */}
            <div className={`${width < 745 && 'hidden'}`}>
                <Slider {...settings}>
                    {/* 1 */}
                    <div className="px-2">
                        <div className="grid grid-rows-3 grid-cols-4 sm:grid-rows-2 sm:grid-cols-5 grid-flow-col gap-4">
                            <div className="row-span-1 col-span-2 sm:row-span-1 sm:col-span-1 cursor-pointer group">
                                <div style={{ 'backgroundImage': `url(${product1})` }} className="w-full product-h bg-cover bg-center rounded-lg"></div>
                                {/* <div className="absolute top-0 left-0 w-full h-full bg-black text-white flex justify-center items-end rounded-lg opacity-0 group-hover:opacity-50">
                                <span className="mb-20">Ultra V</span>
                            </div> */}
                            </div>
                            <div className="row-span-1 col-span-2 sm:row-span-1 sm:col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product2})` }} className="w-full product-h bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-2 sm:row-span-2 sm:col-span-2 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product3})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-2 sm:row-span-1 sm:col-span-2 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product4})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-2 sm:row-span-1 sm:col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product5})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-2 sm:row-span-1 sm:col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product6})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="px-2">
                        <div className="grid grid-rows-3 grid-cols-4 sm:grid-rows-2 sm:grid-cols-5 grid-flow-col gap-4">
                            <div className="row-span-1 col-span-2 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product2})` }} className="w-full product-h bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product5})` }} className="w-full product-h bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product1})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-2 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product3})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product6})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product6})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-2 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product4})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="px-2">
                        <div className="grid grid-rows-2 grid-cols-5 grid-flow-col gap-4">
                            <div className="row-span-1 col-span-3 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product1})` }} className="w-full product-h bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product2})` }} className="w-full product-h bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product3})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product4})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-2 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product5})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product6})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product6})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="px-2">
                        <div className="grid grid-rows-2 grid-cols-5 grid-flow-col gap-4">
                            <div className="row-span-2 col-span-2 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product4})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product2})` }} className="w-full product-h bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product6})` }} className="w-full product-h h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-2 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product4})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product3})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-1 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product1})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                            <div className="row-span-2 col-span-1 cursor-pointer">
                                <div style={{ 'backgroundImage': `url(${product5})` }} className="w-full h-full bg-cover bg-center rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* mobile products gallery */}
            <div className={`${width > 745 && 'hidden'}`}>
                <Slider {...settings}>
                    <div>
                        <div className="cursor-pointer flex">
                            <div style={{ 'backgroundImage': `url(${product1})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                            <div style={{ 'backgroundImage': `url(${product2})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                        </div>
                    </div>
                    <div>
                        <div className="cursor-pointer flex">
                            <div style={{ 'backgroundImage': `url(${product3})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                            <div style={{ 'backgroundImage': `url(${product4})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                        </div>
                    </div>
                    <div>
                        <div className="cursor-pointer flex">
                            <div style={{ 'backgroundImage': `url(${product5})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                            <div style={{ 'backgroundImage': `url(${product6})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                        </div>
                    </div>
                    <div>
                        <div className="cursor-pointer flex">
                            <div style={{ 'backgroundImage': `url(${product1})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                            <div style={{ 'backgroundImage': `url(${product5})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                        </div>
                    </div>
                    <div>
                        <div className="cursor-pointer flex">
                            <div style={{ 'backgroundImage': `url(${product6})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                            <div style={{ 'backgroundImage': `url(${product2})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                        </div>
                    </div>
                    <div>
                        <div className="cursor-pointer flex">
                            <div style={{ 'backgroundImage': `url(${product3})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                            <div style={{ 'backgroundImage': `url(${product4})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                        </div>
                    </div>
                    <div>
                        <div className="cursor-pointer flex">
                            <div style={{ 'backgroundImage': `url(${product1})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                            <div style={{ 'backgroundImage': `url(${product5})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                        </div>
                    </div>
                    <div>
                        <div className="cursor-pointer flex">
                            <div style={{ 'backgroundImage': `url(${product2})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                            <div style={{ 'backgroundImage': `url(${product5})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                        </div>
                    </div>
                    <div>
                        <div className="cursor-pointer flex">
                            <div style={{ 'backgroundImage': `url(${product2})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                            <div style={{ 'backgroundImage': `url(${product6})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                        </div>
                    </div>
                    <div>
                        <div className="cursor-pointer flex">
                            <div style={{ 'backgroundImage': `url(${product1})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                            <div style={{ 'backgroundImage': `url(${product3})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                        </div>
                    </div>
                    <div>
                        <div className="cursor-pointer flex">
                            <div style={{ 'backgroundImage': `url(${product2})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                            <div style={{ 'backgroundImage': `url(${product1})` }} className="w-1/2 mx-1 product-h bg-cover bg-center rounded-lg"></div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Gallery;