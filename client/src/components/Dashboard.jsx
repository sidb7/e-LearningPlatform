import { useEffect, useState } from "react";
import CourseGridContainer from "./CourseGridContainer";
import VerticalNav from "./VerticalNav";
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    // Token handler to fetch user profile
    const tokenHandler = async () => {
        const token = JSON.parse(localStorage.getItem("tokenData"));

        try {
            const response = await fetch("https://localhost:3001/user/profile", {
                headers: { Authorization: `Bearer ${token?.accessToken}` },
            });

            if (!response.ok) {
                navigate("/login")
                throw new Error("Failed to fetch profile");
            }

            const data = await response.json(); // Parse the JSON response
            console.log(data,"USERR PROFILE")
            setProfileData(data);
            // Update the state with profile data
        } catch (err) {
            console.error("Error fetching profile:", err);
            setError(err.message);
        }
    };

    // Use useEffect to fetch data on component mount
    useEffect(() => {
        tokenHandler();
    }, []); // Empty dependency array to run only once

    return (
        <>
            <div className="flex">
                <VerticalNav />
                <CourseGridContainer />
            </div>
        </>
    );
};

export default Dashboard;
