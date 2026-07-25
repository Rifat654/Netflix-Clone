import { useState } from "react";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa6";

import logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white px-6 py-4 relative z-10">
            {/* Navbar */}
            <div className="flex items-center justify-between">

                {/* Left */}
                <div className="flex items-center gap-8">
                    <img src={logo} alt="Netflix Logo" className="w-24" />

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-6 text-sm font-medium">
                        <li className="cursor-pointer hover:text-gray-400 transition">
                            Home
                        </li>
                        <li className="cursor-pointer hover:text-gray-400 transition">
                            TV Shows
                        </li>
                        <li className="cursor-pointer hover:text-gray-400 transition">
                            Movies
                        </li>
                        <li className="cursor-pointer hover:text-gray-400 transition">
                            My List
                        </li>
                        <li className="cursor-pointer hover:text-gray-400 transition">
                            Series
                        </li>
                    </ul>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-5 text-xl">
                    <IoSearch className="cursor-pointer hover:text-gray-400 transition" />
                    <IoMdNotificationsOutline className="cursor-pointer hover:text-red-500 transition" />
                    <FaUser className="cursor-pointer hover:text-green-600 transition" />

                </div>

                {/* Mobile Right */}
                <div className="flex md:hidden items-center gap-4 text-xl">
                    <IoSearch className="cursor-pointer" />
                    <IoMdNotificationsOutline className="cursor-pointer hover:text-red-500 transition" />
                    <FaUser className="cursor-pointer hover:text-green-600 transition-all duration-150" />

                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <IoClose className="text-3xl" />
                        ) : (
                            <IoMenu className="text-3xl" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 border-t border-gray-700 pt-4">
                    <ul className="flex flex-col gap-5 text-center text-lg">

                        <li className="cursor-pointer hover:text-red-500 transition">
                            Home
                        </li>

                        <li className="cursor-pointer hover:text-red-500 transition">
                            TV Shows
                        </li>

                        <li className="cursor-pointer hover:text-red-500 transition">
                            Movies
                        </li>

                        <li className="cursor-pointer hover:text-red-500 transition">
                            My List
                        </li>

                        <li className="cursor-pointer hover:text-red-500 transition">
                            Series
                        </li>

                        <hr className="border-gray-700" />


                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;