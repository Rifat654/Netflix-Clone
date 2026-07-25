import Navbar from "../components/Navbar"
import Hero from "../assets/Interstellar.jpg"
const Home = () => {
    return (
        <div className="relative w-full">
            <Navbar />

            {/* Hero Image */}
            <img
                src={Hero}
                alt="Interstellar Banner"
                className="w-full h-[60vh] md:h-screen object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/90"></div>

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
                <h1 className="text-3xl md:text-6xl font-bold text-white text-center">
                    Interstellar
                </h1>
            </div>
        </div>

    )
}

export default Home
