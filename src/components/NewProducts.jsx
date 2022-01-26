import product1 from "../assets/p1.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import { useWindowDimensions } from '../hooks/WindowSIze';

const NewProducts = () => {

    const {width} = useWindowDimensions();

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: width < 745 ? 1 : 2,
        slidesToScroll: 1,
        variableWidth: width > 525 ? true : false,
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
            <div className="flex justify-between items-center mt-10">
                {/* title */}
                <div className="w-4/5">
                    <div className="text-title">New Products</div>
                    <p className="text-regular">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, tempora tenetur, quas aliquid maxime consequatur consectetur officia quo.</p>
                </div>
            </div>

            {/* Slider */}
            <Slider {...settings}>
                <div className="w-full p-2">
                    <div className="py-4 px-2 rounded-lg shadow-md">
                        <img className="rounded-xl product-img object-cover" src={product1} alt="products" />
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex flex-col">
                                <p className="product-title">Booster</p>
                                <p className="text-small text-grey-dark">For Face</p>
                            </div>
                            <button className="border h-fit p-2 border-blue-dark rounded-lg text-rm hover:bg-blue hover:text-white hover:border-blue">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="w-full p-2">
                    <div className="py-4 px-2 rounded-lg shadow-md">
                        <img className="rounded-xl product-img object-cover" src={product1} alt="products" />
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex flex-col">
                                <p className="product-title">Booster</p>
                                <p className="text-small text-grey-dark">For Face</p>
                            </div>
                            <button className="border h-fit p-2 border-blue-dark rounded-lg text-rm hover:bg-blue hover:text-white hover:border-blue">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="w-full p-2">
                    <div className="py-4 px-2 rounded-lg shadow-md">
                        <img className="rounded-xl product-img object-cover" src={product1} alt="products" />
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex flex-col">
                                <p className="product-title">Booster</p>
                                <p className="text-small text-grey-dark">For Face</p>
                            </div>
                            <button className="border h-fit p-2 border-blue-dark rounded-lg text-rm hover:bg-blue hover:text-white hover:border-blue">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="w-full p-2">
                    <div className="py-4 px-2 rounded-lg shadow-md">
                        <img className="rounded-xl product-img object-cover" src={product1} alt="products" />
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex flex-col">
                                <p className="product-title">Booster</p>
                                <p className="text-small text-grey-dark">For Face</p>
                            </div>
                            <button className="border h-fit p-2 border-blue-dark rounded-lg text-rm hover:bg-blue hover:text-white hover:border-blue">View Details</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default NewProducts;