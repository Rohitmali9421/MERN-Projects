import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCategory = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get('http://localhost:8000/api/category');
            setCategory(response.data);
        } catch (error) {
            setError('Failed to fetch category info');
            console.error('Failed to fetch category info:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <CategoryContext.Provider value={{ category, loading, error }}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;

const useCategory = () => {
    return useContext(CategoryContext);
};

export { useCategory };
