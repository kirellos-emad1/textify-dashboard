'use client'

import { IconType } from "react-icons";
import { usePathname } from "next/navigation";
import NavSection from "./NavSection";
import { MdHome, MdBarChart, MdPerson, MdTune } from "react-icons/md";

interface NavItem {
    icon: IconType,
    path: string;
}

const navItems: NavItem[] = [
    { icon: MdHome, path: "/dashboard/home" },
    { icon: MdBarChart, path: "/dashboard/analytics" },
    { icon: MdPerson, path: "/dashboard/profile" },
    { icon: MdTune, path: "/dashboard/settings" },
];

const Nav = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname.includes(path);

    return (
        <nav className="
            md:w-28 md:h-full md:fixed md:flex-col md:py-10
            fixed bottom-0 w-full h-20 flex flex-row 
            bg-[#F1F2F6] drop-shadow-[0px_4px_8px_rgba(0,0,0,0.2)]
        ">
            <div className="
                md:flex md:flex-col md:justify-between md:h-full md:w-full
                flex flex-row justify-around items-center w-full
            ">
                <NavSection items={navItems.slice(0, 2)} isActive={isActive} />
                <NavSection items={navItems.slice(2)} isActive={isActive} />
            </div>
        </nav>
    );
};

export default Nav;