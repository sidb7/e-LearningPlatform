import "./css/verticalNav.css";
import { LuLayoutDashboard, LuMessageSquare } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { GiIceCube } from "react-icons/gi";

function VerticalNav() {
    const menuItems = [
        { icon: <LuLayoutDashboard size={20} />, label: "Dashboard", link: "#" },
        { icon: <FiBook size={20} />, label: "My Courses", link: "#" },
        { icon: <LuMessageSquare size={20} />, label: "Messages", link: "#" },
        { icon: <MdOutlinePayment size={20} />, label: "Payments", link: "#" },
    ];

    return (
        <nav className="VerticalNavContainer">
            {/* Header */}
            <div className="Header">
                <GiIceCube size={33} />
                <span>GradeWolf</span>
            </div>

            {/* Menu */}
            <div className="VerticalNavMenu">
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>
                                {item.icon}
                                <span>{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default VerticalNav;
