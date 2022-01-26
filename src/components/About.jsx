import passion from "../assets/passion.svg"
import beauty from "../assets/beauty.svg"
import trust from "../assets/trust.svg"
import inavation from "../assets/inavation.svg"


const About = () => {


    return (
        <div className="container">
            <div className="flex justify-between">
                <img src={passion} width="250px" alt="" />
                <img src={beauty} width="250px" alt="" />
                <img src={inavation} width="250px" alt="" />
                <img src={trust} width="250px" alt="" />
            </div>
        </div>
    )
}

export default About;