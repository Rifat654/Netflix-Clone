import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import { cards_data } from "../Data/data.js";


const Tittle_card = ({ tittle }) => {

    // Implement The sliding functionality using the useRef hook 
    const sliderRef = useRef(null);

    const slideLeft = () => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: -sliderRef.current.clientWidth * 0.8,
            behavior: "smooth",
        });
    };

    const slideRight = () => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: sliderRef.current.clientWidth * 0.8,
            behavior: "smooth",
        });
    };

    return (
        <div className="w-full h-full bg-black text-white px-2 md:px-8 py-8">

            <div className="text-right-100 flex items-center justify-between px-3">
                <h2 className="text-xl md:text-2xl  font-bold mb-4">{tittle ? tittle : "Netflix Best Movies "}</h2>

                <div className="flex items-center gap-3 md:gap-5 text-lg md:text-xl ">
                    <button onClick={slideLeft} className="cursor-pointer hover:text-gray-500">
                        <FaArrowLeft />
                    </button>

                    <button onClick={slideRight} className="cursor-pointer hover:text-gray-500">
                        <FaArrowRight />
                    </button>
                </div>

            </div>

            <div ref={sliderRef} className="flex gap-4 px-3 overflow-x-auto flex-nowrap hide-scrollbar ">

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
};

export default Tittle_card
