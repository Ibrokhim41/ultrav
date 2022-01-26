import passion from "../assets/passion.svg"
import beauty from "../assets/beauty.svg"
import trust from "../assets/trust.svg"
import inavation from "../assets/inavation.svg"
import Oppening from "./Oppeing"


const About = () => {


    return (
        <div className="container">
            <Oppening />
            <div className="flex flex-wrap justify-between mt-10">
                <div className="flex w-full sm:w-1/4 justify-center flex-col items-center px-2">
                    <img src={passion} width="250px" alt="" />
                    <div className="flex flex-col items-center text-center">
                        <div className="product-title mb-2">Passion</div>
                        <p>A positive and enthusiastic company with global human resources development</p>
                    </div>
                </div>
                <div className="flex w-full sm:w-1/4 justify-center flex-col items-center px-2">
                    <img src={beauty} width="250px" alt="" />
                    <div className="flex flex-col items-center text-center">
                        <div className="product-title mb-2">Innovation</div>
                        <p>Leaders who do not stop challenging with creative and innovative minds</p>
                    </div>
                </div>
                <div className="flex w-full sm:w-1/4 justify-center flex-col items-center px-2">
                    <img src={inavation} width="250px" alt="" />
                    <div className="flex flex-col items-center text-center">
                        <div className="product-title mb-2">Beauty</div>
                        <p>Beauty biotechnology company that pursues effectiveness and safety as core values</p>
                    </div>
                </div>
                <div className="flex w-full sm:w-1/4 justify-center flex-col items-center px-2">
                    <img src={trust} width="250px" alt="" />
                    <div className="flex flex-col items-center text-center">
                        <div className="product-title mb-2">Faith</div>
                        <p>A company that prioritizes customer trust and pursues customer satisfaction and happiness</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;