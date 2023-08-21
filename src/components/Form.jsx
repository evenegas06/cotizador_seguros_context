import { useContext } from "react";
import BrandSelect from "./BrandSelect";
import PlanRadioButton from "./PlanRadioButton";
import YearSelect from "./YearSelect";
import { QuoterContext } from "../context/QuoterContext";

const Form = () => {
    const { hola } = useContext(QuoterContext);

    console.log(hola);

    return (
        <>
            <form>
                <BrandSelect />

                <YearSelect />

                <PlanRadioButton />

                <input
                    type="submit"
                    className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
                    value="Cotizar ahora"
                />
            </form>
        </>
    );
};
export default Form;