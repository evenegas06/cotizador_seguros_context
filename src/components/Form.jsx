import useQuoter from "../hooks/useQuoter";
import BrandSelect from "./BrandSelect";
import ErrorMessage from "./ErrorMessage";
import PlanRadioButton from "./PlanRadioButton";
import YearSelect from "./YearSelect";

const Form = () => {
    /* ----- Context ----- */
    const { data, error, setError, quote } = useQuoter();

    /**
     * Submit form.
     * 
     * @param {Object} event 
     */
    const submit = (event) => {
        event.preventDefault();

        if (Object.values(data).includes('')) {
            setError('Todos los campos obligatorios.');
            return;
        }

        setError('');
        quote();
        
    };

    return (
        <>
            {error && <ErrorMessage />}
            <form onSubmit={submit}>
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