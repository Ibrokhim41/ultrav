import Oppening from "./Oppeing";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import img1 from '../assets/product1.jpg'
import img2 from '../assets/product2.jpg'
import img3 from '../assets/product3.jpg'
import img4 from '../assets/product4.jpg'
import img5 from '../assets/product5.jpg'
import img6 from '../assets/product6.jpg'

const Galleries = () => {

    const gallery = [
        {
            title: "Ultrav sprey",
            src: img1,
            ulr: '',
        },
        {
            title: "Ultrav sprey",
            src: img2,
            ulr: '',
        },
        {
            title: "Ultrav sprey",
            src: img3,
            ulr: '',
        },
        {
            title: "Ultrav sprey",
            src: img4,
            ulr: '',
        },
        {
            title: "Ultrav sprey",
            src: img5,
            ulr: '',
        },
        {
            title: "Ultrav sprey",
            src: img6,
            ulr: '',
        }
    ]

    return (
        <div className="container">
            <Oppening />
            <div
                className="columns-2 md:columns-3 py-[15px]"
            >
                {gallery.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="relative my-[5px] md:my-[5px] group hover:scale-105 hover:z-50 transition-all duration-500"
                        >
                            <LazyLoadImage
                                src={item.src}
                            />

                            {/* hover effect div */}
                            <div className="absolute top-0 left-0 h-full w-full hidden group-hover:flex items-end">
                                <div className="p-[15px] text-[12px] md:text-[22px] text-black w-full bg-white flex justify-between">
                                    {item.title}
                                    <button className="text-[12px] md:text-[16px] bg-blue text-white py-[3px] px-[6px] md:py-[5px] md:px-[10px] rounded-md">
                                        view
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Galleries;