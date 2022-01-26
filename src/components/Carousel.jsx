import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/ultracol.jpg"


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        // autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="sm:container overflow-hidden">
            <Slider {...settings}>
                <div className="carousel">
                    <img className="w-full h-full object-cover" src={slider1} alt="ultraV" />
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;







