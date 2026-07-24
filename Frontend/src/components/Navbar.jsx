import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

import logo from "../assets/logo.png"
const Navbar = () => {
    return (
        <div>
            <div className="navbar flex justify-between items-center p-4">
                <div className="Left-navbar flex items-center  w-1/2 justify-between p-2">
                    <img src={logo} alt="Logo" className="w-15 h-8" />

                    <ul className="flex items-center gap-2  ">

                        <li>Home</li>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>My List</li>
                        <li>Series</li>
                    </ul>
                </div>
                <div className="Right-nav flex items-center gap-6 cursor-pointer" >
                    <IoSearch />
                    <IoMdNotificationsOutline />

                </div>
            </div>
        </div>
    )
}

export default Navbar
