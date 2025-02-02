import Link from "next/link";
import { IconType } from "react-icons";

interface NavItemProps {
    item: {
        icon: IconType;
        path: string;
    };
    isActive: boolean;
}

const NavItem = ({ item, isActive }: NavItemProps) => {
    const Icon = item.icon;

    return (
        <Link href={item.path}>
            <li className={`
                md:w-[78px] md:h-[78px]
                w-16 h-16
                bg-white flex items-center justify-center rounded-lg
                ${isActive ? "text-[#4F7396] bg-[#4F7396]/15" : "text-[#0D141C]"}
                hover:bg-[#4F7396]/10 transition-all duration-300
            `}>
                <Icon size={32} />
            </li>
        </Link>
    );
};

export default NavItem;