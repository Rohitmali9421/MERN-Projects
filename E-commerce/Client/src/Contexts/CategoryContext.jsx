import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState(null);

    const fetchCategory = async () => {

        try {
            const response = await axios.get('http://localhost:8000/api/category');
            setCategory(  response.data );
        } catch (error) {
            console.error('Failed to fetch Catagory info:', error);
        }

    };

    useEffect(() => {
        fetchCategory();
    }, []);


    return (
        <CategoryContext.Provider value={ category }>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;

const useCategory = () => {
    return useContext(CategoryContext);
};

export { useCategory };
