import Netflix_logo from "../assets/logo.png"

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-white py-4">
                <div className="container  px-4">
                    <div className="mt-4 w-full md:w-[65%] px-3 md:px-0 mx-auto">
                        {/*lOGO Netflix image   */}
                        <img src={Netflix_logo} alt="Netflix Logo" className="h-5 left-2.5 " />

                        <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-3 text-sm md:text-md my-3 md:my-17">
                            <li className=" text-gray-300 cursor-pointer hover:text-white ">Home </li>
                            <li className=" text-gray-300 cursor-pointer hover:text-white ">Movies</li>
                            <li className=" text-gray-300 cursor-pointer hover:text-white ">TV Shows</li>
                            <li className=" text-gray-300 cursor-pointer hover:text-white ">New & Popular</li>
                            <li className=" text-gray-300 cursor-pointer hover:text-white ">My List</li>
                            <li className=" text-gray-300 cursor-pointer hover:text-white ">Watch Next</li>
                            <li className=" text-gray-300 cursor-pointer hover:text-white ">Help Center</li>
                            <li className=" text-gray-300 cursor-pointer hover:text-white ">Home </li>
                            <li className=" text-gray-300 cursor-pointer hover:text-white ">Home </li>
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
