import { createContext } from "react";

export const QuoterContext = createContext();

export const QuoterProvider = ({ children }) => {
    const hola = 'HOLA';

    return (
        <QuoterContext.Provider value={{
            hola: hola
        }}>
            {children}
        </QuoterContext.Provider>
    );
};