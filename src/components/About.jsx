import passion from "../assets/passion.svg"
import beauty from "../assets/beauty.svg"
import trust from "../assets/trust.svg"
import inavation from "../assets/inavation.svg"
import Oppening from "./Oppeing"


const About = () => {


    return (
        <div className="container">
            <Oppening />
            <div className="mt-10">
                <div className="product-title text-center mb-4">“THE PIONEER in the field of ULTRA V LIFTING SYSTEM”</div>
                <p className="text-center">
                    Ultra V Co., Ltd. is a company that develops, manufactures, and supplies medical devices and functional cosmetics to domestic and overseas markets. It also manufactures PDO-Polydioxanone and PCL-Poly-Caprolactone for use in dermatology and plastic surgery. In order to supply more effective and safe products, we are carrying out clinical verification and diversifying our business through the affiliated Dermaster Clinic.
                    <br />
                    The medical suture, widely known as Ultra V-Lifting, is a representative brand of Ultra V. Based on the advantage of maximizing anti-aging effects with simple procedures, the range of application is getting wider with various treatment techniques.
                    <br />
                    Ultra V Cosmetic is pioneering new cosmetics market by launching high functional anti-aging products that are used in domestic and overseas hospitals based on patented technology and many years of clinical experiment.
                    <br />
                    As a leader in biomedical beauty, ULTRA V will take the lead in developing innovative products.
                </p>

            </div>
            <div className="flex flex-wrap justify-between my-24">
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