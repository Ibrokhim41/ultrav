import Carousel from "../components/Carousel"
import NewProducts from "../components/NewProducts"
import Gallery from "../components/Gallery"
import Subscribe from "../components/Subscribe"
import Oppening from "../components/Oppeing"

const Home = () => {

    return (
        <div>
            <Oppening />
            <Carousel />
            <NewProducts />
            <Gallery />
            <Subscribe />
        </div>
    )
}

export default Home;