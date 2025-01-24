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
  const onlineUsers = useSelector((state) => state.socket.onlineUsers); // Get online users from Redux
  const navigate = useNavigate();
  const { socket } = useSocket(user?._id);

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
      {/* Sidebar */}
      <div
        className={`bg-red-50 h-screen sm:w-80 w-full sm:block ${isSidebarVisible ? "block" : "hidden"
          }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between bg-white h-12 sticky top-0 px-4">
          <FaBars onClick={toggleSidebar} className="cursor-pointer" />
          <div className="w-full flex items-center bg-gray-200 h-8 mx-2 rounded-full">
            <IoIosSearch className="text-2xl m-2" />
            <input
              className="outline-none bg-gray-200 text-base w-full mr-2"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Sidebar content with independent scrolling */}
        <div className="h-[calc(100%-3rem)] overflow-y-auto">
          {loading && <p className="text-gray-500 text-center">Loading...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
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

      {/* Main content */}
      <div
        className={`h-screen w-full ${isSidebarVisible ? "hidden sm:block" : "block"
          }`}
      >
        <Outlet context={{ toggleSidebar }} />
      </div>
    </div>
  );
}

export default Home;
