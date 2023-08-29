import useQuoter from "../hooks/useQuoter";
import { BRANDS, PAYMENT_PLANS } from "../utils/constants";

const TotalCost = () => {
    /* ----- Context ----- */
    const { total_cost, data } = useQuoter();

    const [brand] = BRANDS.filter((item) => {
        return item.id === Number(data.brand);
    });

    const [plan] = PAYMENT_PLANS.filter((item) => {
        return item.id === Number(data.plan);
    });

    if (total_cost === '') {
        return null;
    }

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>

            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {brand.name}
            </p>

            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {plan.name}
            </p>

            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {data.year}
            </p>

            <p className="my-2 text-2xl">
                <span className="font-bold">Total de la cotización: </span>
                {total_cost}
            </p>
        </div>
    );
};
export default TotalCost;