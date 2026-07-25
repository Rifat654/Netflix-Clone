import { IoPlay } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";
import Navbar from "../components/Navbar"
import Hero from "../assets/Interstellar.jpg"
import Tittle_cards from "../components/Tittle_cards";

const Home = () => {
    return (
        <div className=" w-full ">
            <Navbar />

            <div className="relative Banner-image w-full h-[80vh] md:h-screen  flex items-center justify-center">

                {/* Hero Image */}
                <img
                    src={Hero}
                    alt="Interstellar Banner"
                    className="w-full h-[60vh] md:h-screen object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute  inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/90"></div>

                {/* Hero Content */}
                <div className=" absolute inset-0 flex flex-col  items-center justify-center  px-4">

                    <h1 className="text-3xl md:text-6xl font-bold text-white text-center">
                        INTERSTELLAR
                    </h1>
                    <p className="text-[13px] md:text-md text-center max-w-2xl">
                        A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. And a brief of time dilation and relativity. The movie is a visual masterpiece that takes the audience on an emotional journey through space and time.
                    </p>
                    <div className="flex flex-row items-center gap-4 mt-4">

                        <div className="flex items-center gap-4 mt-4 bg-white text-black px-4 py-2 rounded-md font-bold hover:bg-gray-300">
                            <IoPlay />
                            <button className="cursor-pointer">
                                Play
                            </button>
                        </div>
                        <div className="flex items-center  gap-2 mt-4 bg-white text-black px-2 py-2 rounded-md font-bold hover:bg-gray-300">
                            <FiInfo />

                            <button className="cursor-pointer font-semibold">
                                More Info
                            </button>
                        </div>

                    </div>

                </div>

            </div>

            <Tittle_cards />
        </div>

    )
}

export default Home
