
import { cards_data } from "../Data/data.js";
const Tittle_cards = () => {

    return (
        <div className="w-full h-full bg-black text-white px-8 py-8">
            <div>
                <h2 className="text-xl font-bold mb-4">Trending Movies</h2>
            </div>
            <div className="flex gap-4 px-10 overflow-x-auto flex-nowrap scrollbar-hide  scroll-smooth">

                {cards_data.map((card, index) => (
                    <div
                        key={index}
                        className="relative group shrink-0 w-48 md:w-60"
                    >
                        <img
                            src={card.image}
                            alt={card.name}
                            className="w-full h-72 object-cover rounded-md"
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

export default Tittle_cards
