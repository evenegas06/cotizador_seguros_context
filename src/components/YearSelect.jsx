import useQuoter from "../hooks/useQuoter";
import { YEARS } from "../utils/constants";

const YearSelect = () => {
    /* ----- Context ----- */
    const { handleInputChange } = useQuoter();

    return (
        <div className="my-5">
            <label
                htmlFor="year"
                className="block mb-3 font-bold text-gray-400 uppercase"
            >
                Año del automóvil
            </label>

            <select
                name="year"
                id="year"
                className="w-full p-3 bg-white border border-gray-200"
                onChange={(event) => handleInputChange(event)}
            >
                <option value="">
                    -- Selecciona una marca --
                </option>

                {YEARS.map((item) => {
                    return (
                        <option
                            key={item}
                            value={item}
                        >
                            {item}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
export default YearSelect;