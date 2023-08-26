import { useContext } from "react";
import { QuoterContext } from "../context/QuoterContext";

/**
 * 
 * @returns {React.Context}
 */
const useQuoter = () => {
    return useContext(QuoterContext);
};

export default useQuoter;