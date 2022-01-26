import product1 from "../assets/p1.jpg"
import { useHistory } from 'react-router-dom';

const Products = () => {

    const navigate = useHistory()

    return (
        <div className="container">
            {/* title */}
            <div className="w-4/5 mt-5">
                <div className="text-title">Products</div>
                <p className="text-regular">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, tempora tenetur, quas aliquid maxime consequatur consectetur officia quo.</p>
            </div>

            {/* products */}
            <div className="flex flex-wrap">
                <div
                    onClick={() => navigate.push("/product")}
                    className="w-full sm:w-1/2 p-2"
                >
                    <div className="py-4 px-2 rounded-lg shadow-sm hover:shadow-lg cursor-pointer bg-white transition-all transform hover:scale-105">
                        <img className="rounded-xl product-img object-cover" src={product1} alt="products" />
                        <div className="flex justify-center items-center mt-4">
                            <div className="flex flex-col items-center">
                                <p className="product-title">Boosters</p>
                                <p className="text-small text-grey-dark">For Face</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => navigate.push("/product")}
                    className="w-full sm:w-1/2 p-2"
                >
                    <div className="py-4 px-2 rounded-lg shadow-sm hover:shadow-lg cursor-pointer bg-white transition-all transform hover:scale-105">
                        <img className="rounded-xl product-img object-cover" src={product1} alt="products" />
                        <div className="flex justify-center items-center mt-4">
                            <div className="flex flex-col items-center">
                                <p className="product-title">Boosters</p>
                                <p className="text-small text-grey-dark">For Face</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => navigate.push("/product")}
                    className="w-full sm:w-1/2 p-2"
                >
                    <div className="py-4 px-2 rounded-lg shadow-sm hover:shadow-lg cursor-pointer bg-white transition-all transform hover:scale-105">
                        <img className="rounded-xl product-img object-cover" src={product1} alt="products" />
                        <div className="flex justify-center items-center mt-4">
                            <div className="flex flex-col items-center">
                                <p className="product-title">Boosters</p>
                                <p className="text-small text-grey-dark">For Face</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => navigate.push("/product")}
                    className="w-full sm:w-1/2 p-2"
                >
                    <div className="py-4 px-2 rounded-lg shadow-sm hover:shadow-lg cursor-pointer bg-white transition-all transform hover:scale-105">
                        <img className="rounded-xl product-img object-cover" src={product1} alt="products" />
                        <div className="flex justify-center items-center mt-4">
                            <div className="flex flex-col items-center">
                                <p className="product-title">Boosters</p>
                                <p className="text-small text-grey-dark">For Face</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => navigate.push("/product")}
                    className="w-full sm:w-1/2 p-2"
                >
                    <div className="py-4 px-2 rounded-lg shadow-sm hover:shadow-lg cursor-pointer bg-white transition-all transform hover:scale-105">
                        <img className="rounded-xl product-img object-cover" src={product1} alt="products" />
                        <div className="flex justify-center items-center mt-4">
                            <div className="flex flex-col items-center">
                                <p className="product-title">Boosters</p>
                                <p className="text-small text-grey-dark">For Face</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => navigate.push("/product")}
                    className="w-full sm:w-1/2 p-2"
                >
                    <div className="py-4 px-2 rounded-lg shadow-sm hover:shadow-lg cursor-pointer bg-white transition-all transform hover:scale-105">
                        <img className="rounded-xl product-img object-cover" src={product1} alt="products" />
                        <div className="flex justify-center items-center mt-4">
                            <div className="flex flex-col items-center">
                                <p className="product-title">Boosters</p>
                                <p className="text-small text-grey-dark">For Face</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => navigate.push("/product")}
                    className="w-full sm:w-1/2 p-2"
                >
                    <div className="py-4 px-2 rounded-lg shadow-sm hover:shadow-lg cursor-pointer bg-white transition-all transform hover:scale-105">
                        <img className="rounded-xl product-img object-cover" src={product1} alt="products" />
                        <div className="flex justify-center items-center mt-4">
                            <div className="flex flex-col items-center">
                                <p className="product-title">Boosters</p>
                                <p className="text-small text-grey-dark">For Face</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;