// icons
import { useState } from "react";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
// import files
import logo from "../assets/logo.png";
import { NavLinks } from "../Data/data"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent text-white px-6 md:px-3 py-3 relative z-50">

            {/* Top Navbar */}
            <div className="flex justify-between items-center">

                {/* Logo */}
                <div>
                    <img src={logo} alt="Logo" className="h-7" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-4">
                        {
                            NavLinks.map((item, index) => {
                                return (
                                    <li key={index} className="hover:text-red-500 cursor-pointer ">{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">

                    {/* Search - Desktop */}
                    <form className="hidden md:flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-800 px-3 py-2 rounded-full outline-none"
                        />
                        <IoSearch className="cursor-pointer text-xl" />
                    </form>

                    <MdOutlineNotificationsNone className="cursor-pointer text-2xl" />

                    <FaRegUser className="cursor-pointer text-xl" />

                    {/* Hamburger - Mobile */}
                    <button
                        className="lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <IoClose className="text-2xl cursor-pointer" />
                        ) : (
                            <IoMenu className="text-2xl cursor-pointer" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden mt-5  bg-black border-t border-gray-700">
                    <ul className="flex flex-col items-center gap-5 py-6">
                        {
                            NavLinks.map((item, index) => {
                                return (
                                    <li key={index} className="hover:text-red-500 cursor-pointer">{item}</li>
                                )
                            })
                        }

                        {/* Search only for mobile */}
                        <div className="flex items-center gap-2 mt-3">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-gray-800 px-3 py-2 rounded-full outline-none"
                            />
                            <IoSearch className="text-xl cursor-pointer" />
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;