import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search_Btn = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {

        setIsOpen(!isOpen);

    };

    return (
        <div className="relative w-10 h-10">
            <div
                className={`absolute right-0 top-0 flex items-center justify-center bg-black  border border-gray-500 rounded-full  overflow-hidden transition-all duration-300 ${isOpen ? "w-64 px-3 h-10" : "w-10 h-10 justify-center"
                    }`}>

                <input
                    type="text"
                    placeholder="Titles, people, genres"
                    className={`bg-transparent text-white outline-none ml-3 transition-all duration-300 ${isOpen ? "w-full opacity-100" : "w-0 opacity-0"
                        }`} />

                <button onClick={() => handleClick()} className=" flex items-center justify-center ">
                    <IoSearch className="text-2xl  cursor-pointer" />
                </button>
            </div>
        </div>
    );
};

export default Search_Btn;