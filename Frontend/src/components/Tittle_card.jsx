import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import { cards_data } from "../Data/data.js";
const Tittle_card = () => {

    return (
        <div className="w-full h-full bg-black text-white px-2 md:px-8 py-8">

            <div className="text-right-100 flex items-center justify-between px-3">
                <h2 className="text-xl md:text-2xl  font-bold mb-4">Trending Movies</h2>
                <div className="flex items-center gap-2 text-lg md:text-xl cursor-pointer">
                    <FaArrowLeft />
                    <FaArrowRight />
                </div>
            </div>

            <div className="flex gap-4 px-3 overflow-x-auto flex-nowrap hide-scrollbar ">

                {cards_data.map((card, index) => (
                    <div
                        key={index}
                        className="relative group shrink-0 w-48 md:w-60"
                    >
                        <img
                            src={card.image}
                            alt={card.name}
                            className="w-full h-30 md:h-40 object-cover rounded-md"
                        />

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-md">
                            <h3 className="text-white font-bold text-lg">
                                {card.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tittle_card
