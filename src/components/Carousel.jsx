import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/ultracol.jpg"
import slider2 from "../assets/b2.jpg"
import slider3 from "../assets/b3.jpg"
import slider4 from "../assets/b1.jpg"
import slider5 from "../assets/aus2.jpg"



const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="sm:container overflow-hidden">
            <Slider {...settings}>
                <div className="carousel">
                    <img className="w-full h-[300px] sm:h-[600px] object-cover" src={slider1} alt="ultraV" />
                </div>
                <div>
                    <img className="w-full h-[300px] sm:h-[600px] object-cover" src={slider2} alt="ultraV" />
                </div>
                <div>
                    <img className="w-full h-[300px] sm:h-[600px] object-cover" src={slider3} alt="ultraV" />
                </div>
                <div>
                    <img className="w-full h-[300px] sm:h-[600px] object-cover" src={slider4} alt="ultraV" />
                </div>
                <div>
                    <img className="w-full h-[300px] sm:h-[600px] object-cover" src={slider5} alt="ultraV" />
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;







