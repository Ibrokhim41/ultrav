import booster from '../assets/2.jpg'
import booster2 from '../assets/3.jpg'
import booster3 from '../assets/4.jpg'
import booster4 from '../assets/p3.jpg'
import Oppening from './Oppeing';

const InProducts = () => {

    const features = [
        { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
        { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
        { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
        { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
        { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
        { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
    ]

    return (
        <div className="container">
            <Oppening />
            {/* title */}
            <div className="w-4/5 mt-5">
                <div className="text-title">Boosters</div>
                <p className="text-regular">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, tempora tenetur, quas aliquid maxime consequatur consectetur officia quo.</p>
            </div>

            {/* products */}
            <div className="flex flex-col mt-10 w-full rounded-lg shadow-md">
                <div className="border-b border-b-grey-light hover:bg-grey-light py-4 px-4 cursor-pointer rounded-t-lg group">
                    {/* title */}
                    <div>Booster 1</div>
                    <div
                        className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-[2000px]"
                    >
                        <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-[2000px]">
                            <div className="max-w-2xl mx-auto py-24 px-4 grid items-start grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                                <div>
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
                                    <p className="mt-4 text-gray-500">
                                        The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
                                        steel divider separates active cards from new ones, or can be used to archive important task lists.
                                    </p>

                                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                        {features.map((feature) => (
                                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                                <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-6 lg:gap-8">
                                    <img
                                        src={booster}
                                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                        className="bg-gray-100 rounded-lg"
                                    />
                                    <img
                                        src={booster2}
                                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                                        className="bg-gray-100 rounded-lg"
                                    />
                                    <img
                                        src={booster3}
                                        alt="Side of walnut card tray with card groove and recessed card area."
                                        className="bg-gray-100 rounded-lg"
                                    />
                                    <img
                                        src={booster4}
                                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                        className="bg-gray-100 rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-b-grey-light hover:bg-grey-light py-4 px-4 cursor-pointer group">
                    {/* title */}
                    <div>Booster 2</div>
                    <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-[2000px]">
                        <div className="max-w-2xl mx-auto py-24 px-4 grid items-start grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                            <div>
                                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
                                <p className="mt-4 text-gray-500">
                                    The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
                                    steel divider separates active cards from new ones, or can be used to archive important task lists.
                                </p>

                                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="border-t border-gray-200 pt-4">
                                            <dt className="font-medium text-gray-900">{feature.name}</dt>
                                            <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                <img
                                    src={booster}
                                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                    className="bg-gray-100 rounded-lg"
                                />
                                <img
                                    src={booster2}
                                    alt="Top down view of walnut card tray with embedded magnets and card groove."
                                    className="bg-gray-100 rounded-lg"
                                />
                                <img
                                    src={booster3}
                                    alt="Side of walnut card tray with card groove and recessed card area."
                                    className="bg-gray-100 rounded-lg"
                                />
                                <img
                                    src={booster4}
                                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                    className="bg-gray-100 rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4 px-4  hover:bg-grey-light cursor-pointer rounded-b-lg group">
                    {/* title */}
                    <div>Booster 3</div>
                    <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-[2000px]">
                        <div className="max-w-2xl mx-auto py-24 px-4 grid items-start grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                            <div>
                                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
                                <p className="mt-4 text-gray-500">
                                    The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
                                    steel divider separates active cards from new ones, or can be used to archive important task lists.
                                </p>

                                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="border-t border-gray-200 pt-4">
                                            <dt className="font-medium text-gray-900">{feature.name}</dt>
                                            <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                            <div className="grid grid-cols-2 grid-rows-2 gap-2">
                                <img
                                    src={booster}
                                    alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                    className="bg-gray-100 rounded-lg"
                                />
                                <img
                                    src={booster2}
                                    alt="Top down view of walnut card tray with embedded magnets and card groove."
                                    className="bg-gray-100 rounded-lg"
                                />
                                <img
                                    src={booster3}
                                    alt="Side of walnut card tray with card groove and recessed card area."
                                    className="bg-gray-100 rounded-lg"
                                />
                                <img
                                    src={booster2}
                                    alt="Top down view of walnut card tray with embedded magnets and card groove."
                                    className="bg-gray-100 rounded-lg"
                                />
                                <img
                                    src={booster3}
                                    alt="Side of walnut card tray with card groove and recessed card area."
                                    className="bg-gray-100 rounded-lg col-span-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InProducts;