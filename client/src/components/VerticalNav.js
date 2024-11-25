import "./css/verticalNav.css"
import { SiStudyverse } from "react-icons/si";
import { LuLayoutDashboard ,LuMessageSquare } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { GiIceCube } from "react-icons/gi";
function VerticalNav(){
    return (
        <div className="VerticalNavContainer" >
            <div className="Header">
            <GiIceCube size={33}/> <span>GradeWolf</span> 
            </div>
            <div className="VerticalNavMenu">
                <p><LuLayoutDashboard size={20}/>  <span>DashBoard</span></p>
                <p><FiBook size={20}/>  My Courses</p>
                <p><LuMessageSquare size={20}/>  Mesaages</p>
                <p><MdOutlinePayment size={20}/>  Payments</p>

            </div>
        </div>
        
    )
}

export default VerticalNav