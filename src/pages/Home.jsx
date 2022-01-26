import Carousel from "../components/Carousel"
import NewProducts from "../components/NewProducts"
import Gallery from "../components/Gallery"
import Subscribe from "../components/Subscribe"

const Home = () => {

    return (
        <div>
            <Carousel />
            <NewProducts />
            <Gallery />
            <Subscribe />
        </div>
    )
}

export default Home;