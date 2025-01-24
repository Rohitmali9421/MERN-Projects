import React, { useEffect, useState } from "react";
import UserList from "../Components/UserList";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { useSelector } from "react-redux";
import useSocket from "../hooks/useSocket";

function Home() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { user } = useSelector((state) => state.auth);
    const onlineUsers = useSelector((state) => state.socket.onlineUsers);
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    const toggleSidebar = () => {
        setIsSidebarVisible((prev) => !prev);
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/user/users");
            setUsers(response.data);
            setError(null);
        } catch (err) {
            setError("Failed to fetch users.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="h-screen w-full flex">

            <div
                className={`bg-gray-50 shadow-lg h-screen sm:w-80 w-full sm:block ${isSidebarVisible ? "block" : "hidden"
                    }`}
            >

                <div className="flex items-center justify-between bg-white h-14 sticky top-0 px-4 shadow-md z-10">
                    <FaBars
                        onClick={toggleSidebar}
                        className="cursor-pointer text-gray-600 hover:text-gray-800 transition"
                    />
                    <div className="w-full flex items-center bg-gray-200 h-10 mx-2 rounded-full overflow-hidden">
                        <IoIosSearch className="text-xl text-gray-500 ml-3" />
                        <input
                            className="outline-none bg-transparent text-sm w-full px-2 placeholder-gray-500"
                            type="text"
                            placeholder="Search users..."
                        />
                    </div>
                </div>


                <div className="h-[calc(100%-3.5rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {loading && (
                        <p className="text-gray-500 text-center py-4">Loading users...</p>
                    )}
                    {error && (
                        <p className="text-red-500 text-center py-4">{error}</p>
                    )}
                    {users &&
                        users.map((user) => (
                            <Link
                                key={user._id}
                                to={`/home/chat/${user._id}`}
                                onClick={() => setIsSidebarVisible(false)}
                            >
                                <UserList
                                    name={user.name}
                                    image={user.profilePic?.url || "default-profile-pic.png"} // Fallback for missing profile pics
                                    isOnline={onlineUsers.includes(user._id)} // Check if user is online
                                />
                            </Link>
                        ))}
                </div>
            </div>


            <div
                className={`h-screen w-full bg-gray-100 ${isSidebarVisible ? "hidden sm:block" : "block"
                    }`}
            >
                <Outlet context={{ toggleSidebar }} />
            </div>
        </div>
    );
}

export default Home;
