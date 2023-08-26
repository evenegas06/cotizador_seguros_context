import { createContext, useState } from "react";
import { formatCurrency } from "../utils/helpers";

export const QuoterContext = createContext();

export const QuoterProvider = ({ children }) => {
    /* ----- States ----- */
    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    });
    const [error, setError] = useState('');
    const [total_cost, setTotalCost] = useState('');
    const [loading, setLoading] = useState(false);

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

    /**
     * Calculate total insurance and set on state. 
     */
    const quote = () => {
        let increment;

        const base_price = 2000;
        const years_difference = new Date().getFullYear() - data.year;

        /* 3% less each year. */
        let total = base_price - ((years_difference * 3) * base_price) / 100;

        switch (data.brand) {
            case "1":
                increment = 1.3; // Europeo 30%
                break;
            case "2":
                increment = 1.15; // Americano 15%
                break;
            case "3":
                increment = 1.05; // Asiático 5%
                break;
            default:
                increment = 1;
                break;
        }

        total *= increment;

        /* basic: 20%, complete: 50% */
        total *= data.plan == "1" ? 1.2 : 1.5;

        total = formatCurrency(total);
        setLoading(true);

        setTimeout(() => {
            setTotalCost(total);
            setLoading(false);
        }, 2000);
    };

    return (
        <QuoterContext.Provider value={{
            data,
            handleInputChange,
            error,
            setError,
            quote,
            loading,
            total_cost,
        }}>
            {children}
        </QuoterContext.Provider>
    );
};