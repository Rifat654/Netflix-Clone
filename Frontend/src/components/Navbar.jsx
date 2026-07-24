import { useState } from "react";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa6";

import logo from "../assets/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white px-6 py-4">
            <div className="flex items-center justify-between">

                {/* Left */}
                <div className="flex items-center gap-8">
                    <img src={logo} alt="Logo" className="w-24" />

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-6 text-sm">
                        <li className="cursor-pointer hover:text-gray-400">Home</li>
                        <li className="cursor-pointer hover:text-gray-400">TV Shows</li>
                        <li className="cursor-pointer hover:text-gray-400">Movies</li>
                        <li className="cursor-pointer hover:text-gray-400">My List</li>
                        <li className="cursor-pointer hover:text-gray-400">Series</li>
                    </ul>
                </div>

                {/* Right */}
                <div className="hidden md:flex items-center gap-5 text-xl">
                    <IoSearch className="cursor-pointer" />
                    <IoMdNotificationsOutline className="cursor-pointer" />
                    <span className="text-sm cursor-pointer">Children</span>
                    <FaUser className="cursor-pointer" />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <IoClose /> : <IoMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4">
                    <ul className="flex flex-col gap-4">
                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>My List</li>
                        <li>Series</li>

                        <hr className="border-gray-700" />

                        <div className="flex items-center gap-5 text-xl">
                            <IoSearch />
                            <IoMdNotificationsOutline />
                            <span className="text-sm">Children</span>
                            <FaUser />
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;