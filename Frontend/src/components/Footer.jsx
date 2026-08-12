import Netflix_logo from "../assets/logo.png"

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-white py-4">
                <div className="container  px-4">
                    <div className="mt-4 w-full md:w-[70%] mx-auto">
                        <img src={Netflix_logo} alt="Netflix Logo" className="h-5 left-2.5 " />
                        <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-0 text-sm md:text-md text-gray-300 cursor-pointer hover:text-white my-7 md:my-17 ">
                            <li>Home </li>
                            <li>Movies</li>
                            <li>TV Shows</li>
                            <li>New & Popular</li>
                            <li>My List</li>
                            <li>Watch Next</li>
                            <li>Help Center</li>
                            <li>Home </li>
                            <li>Home </li>
                        </ul>
                    </div>
                    <p className="text-center text-gray-400 text-sm mt-4">
                        &copy; 2026 Netflix Clone. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
