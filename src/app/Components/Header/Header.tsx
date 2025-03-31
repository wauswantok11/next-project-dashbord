"use client"
import React from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
interface HeaderProps {
    toggle: boolean;
    setToggle: (value: boolean) => void;
} 

const Header = ({ toggle, setToggle }: HeaderProps) => {
    const HandlerToggleMenu = () => setToggle(!toggle);
    return (
        <div className="flex justify-between items-center py-4 px-6 bg-gray-100 w-full">
            <div className="flex justify-between items-center ">
                <div className={`text-xl font-bold ${toggle ? "mr-30":"mr-7"}`}>
                    <Link href={"/"} as={"/"}>
                        <span className="text-blue-500">{toggle ? "Dashboard UI" :"Dash.." }</span>
                    </Link>
                </div>
                <div className="cursor-pointer " onClick={HandlerToggleMenu}>
                    {toggle ? (<AiOutlineMenuFold  />) : (<AiOutlineMenuUnfold/>)}
                </div>
            </div>
            <div className="relative">
                <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <input type="text" className="w-160 py-2 pl-10 pr-4 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Search" />
            </div>
            <div className="flex items-center space-x-6 ">
                <div className="flex items-center space-x-3">
                    <Image src={"/assets/66306s.jpg"} width={40} height={40} className="rounded-full ring-2 ring-gray-200" alt={"account-image"} />
                    <div className="flex items-center hover:text-gray-600 cursor-pointer">
                        <span className="font-medium">Adul Vasuvantok</span>
                        <FiChevronDown className="ml-2 h-4 w-4 cursor-pointer transition-all duration-200 rounded-full  hover:ring-gray-200  hover:ring-2 " />
                    </div>
                </div>
                <div className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    <IoIosNotificationsOutline className="h-6 w-6" />
                </div>
            </div>
        </div>
    );
};

export default Header;