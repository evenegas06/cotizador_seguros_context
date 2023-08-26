import { createContext, useState } from "react";

export const QuoterContext = createContext();

export const QuoterProvider = ({ children }) => {
    /* ----- States ----- */
    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    });
    const [error, setError] = useState('');

    /**
     * Save input values on *data* state.
     * 
     * @param {Object} event 
     */
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setData({
            ...data,
            [name]: value
        });
    };

    return (
        <QuoterContext.Provider value={{
            data,
            handleInputChange,
            error,
            setError,
        }}>
            {children}
        </QuoterContext.Provider>
    );
};