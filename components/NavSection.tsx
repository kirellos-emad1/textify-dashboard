'use client'

import { IconType } from "react-icons";
import NavItem from "./NavItem";

interface NavSectionProps {
    items: {
        icon: IconType;
        path: string;
    }[];
    isActive: (path: string) => boolean;
}

const NavSection = ({ items, isActive }: NavSectionProps) => {
    return (
        <ul className="
            md:flex-col md:gap-6
            flex flex-row gap-4 items-center justify-center
        ">
            {items.map((item) => (
                <NavItem key={item.path} item={item} isActive={isActive(item.path)} />
            ))}
        </ul>
    );
};

export default NavSection;
