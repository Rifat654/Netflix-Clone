import Navbar from "../components/Navbar"
import Hero from "../assets/Interstellar.jpg"
const Home = () => {
    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <div className="hero">
                <img src={Hero} alt="banner image" className="bg-cover w-full h-screen" />
            </div>
        </div>
    )
}

export default Home
