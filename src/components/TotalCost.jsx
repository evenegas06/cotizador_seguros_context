import useQuoter from "../hooks/useQuoter";

const TotalCost = () => {
    /* ----- Context ----- */
    const { total_cost } = useQuoter();

    return (
        <h3>
            {total_cost}
        </h3>
    );
};
export default TotalCost;