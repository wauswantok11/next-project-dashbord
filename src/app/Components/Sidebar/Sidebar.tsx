"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineDashboard } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { BsInboxes } from "react-icons/bs"; 
import { BsListTask } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineAccountBox } from "react-icons/md";
import { TbHelpSquare } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";

interface SidebarProps {
    toggle: boolean;
}

const Sidebar = ({ toggle }: SidebarProps) => {
    const pathname = usePathname();
    const [path, setPath] = React.useState("");
    React.useEffect(() => {
        setPath(pathname);
    }, [pathname]); 
    React.useEffect(() => {
        console.log(toggle);
    }, [toggle]); 
    return (
        <div className={` bg-gray-100 p-4 space-y-6 md:block flex flex-col ${toggle ? "w-64" : "w-24 items-center"}`}>
            <nav className="flex-1 space-y-2 overflow-y-auto">
                <p className={`flex items-center font-bold ${toggle ? "" : "justify-center"}`}> MENU </p>
                <Link href="/" className={`${path === "/" ? "bg-gray-200  text-blue-500 font-bold" : ""} 
                    ${toggle ? "" : "items-center justify-center"} flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors`}>
                    <p className={`flex items-center ${toggle ? "" : "justify-center"}`}>
                        <IoHomeOutline className={`${path === "/" ? "text-blue-500" : ""} ${toggle ? "mr-3" : "mr-1"}`} />
                        <span className={`${path === "/" ? "text-blue-500" : ""}`}>
                            {toggle ? "บัญชีนิติบุคคล" : ""}
                        </span>
                    </p>
                </Link>
                <Link href="/Pages/Dashboard" className={`${path === "/Pages/Dashboard" ? "bg-gray-200  text-blue-500 font-bold" : ""} 
                    ${toggle ? "" : "items-center justify-center"} flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors`}>
                    <p className="flex items-center">
                        <MdOutlineDashboard className={`${path === "/Pages/Dashboard" ? "text-blue-500 " : ""} ${toggle ? "mr-3" : "mr-1"}`} />
                        <span className={`${path === "/Pages/Dashboard" ? "text-blue-500" : ""}`}>
                            {toggle ? "Dashboard" : ""}
                        </span>
                    </p>
                </Link>
                <Link href="/Pages/Calendar" className={`${path === "/Pages/Calendar" ? "bg-gray-200  text-blue-500 font-bold" : ""} 
                    ${toggle ? "" : "items-center justify-center"} flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors`}>
                    <p className="flex items-center">
                        <LuCalendarDays className={`${path === "/Pages/Calendar" ? "text-blue-500" : ""}  ${toggle ? "mr-3" : "mr-1"}`} />
                        <span className={`${path === "/Pages/Calendar" ? "text-blue-500" : ""}`}>
                            {toggle ? "Calendar" : ""}
                        </span>
                    </p>
                </Link>
                <Link href="/Pages/Inbox" className={`${path === "/Pages/Inbox" ? "bg-gray-200  text-blue-500 font-bold" : ""} 
                    ${toggle ? "" : "items-center justify-center"} flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors`}>
                    <p className="flex items-center">
                        <BsInboxes className={`${path === "/Pages/Inbox" ? "text-blue-500" : ""}  ${toggle ? "mr-3" : "mr-1"}`} />
                        <span className={`${path === "/Pages/Inbox" ? "text-blue-500 " : ""}`}>
                            {toggle ? "Inbox" : ""}
                        </span>
                    </p>
                </Link>
                <Link href="/Pages/Tasks" className={`${path === "/Pages/Tasks" ? "bg-gray-200 text-blue-500 font-bold" : ""} 
                    ${toggle ? "" : "items-center justify-center"} flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors`}>
                    <p className="flex items-center">
                        <BsListTask className={`${path === "/Pages/Tasks" ? "text-blue-500" : ""}  ${toggle ? "mr-3" : "mr-1"}`} />
                        <span className={`${path === "/Pages/Tasks" ? "text-blue-500" : ""} `}>
                            {toggle ? "My tasks" : ""}
                        </span>
                    </p>
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;