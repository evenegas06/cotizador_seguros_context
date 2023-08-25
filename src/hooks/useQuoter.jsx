import { useContext } from "react";
import { QuoterContext } from "../context/QuoterContext";

const useQuoter = () => {
    return useContext(QuoterContext);
};

export default useQuoter;