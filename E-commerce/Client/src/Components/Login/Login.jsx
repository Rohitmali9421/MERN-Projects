import React, { useEffect } from 'react';
import axios from 'axios';

function Login() {
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/products");
      const data = res.data; // Access the data from the response
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      Login
    </div>
  );
}

export default Login;
