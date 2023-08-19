import { YEARS } from "../utils/constants";

const YearSelect = () => {
    return (
        <div className="my-5">
            <label
                htmlFor="brand"
                className="block mb-3 font-bold text-gray-400 uppercase"
            >
                Año del automóvil
            </label>

            <select
                name="brand"
                id="brand"
                className="w-full p-3 bg-white border border-gray-200"
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