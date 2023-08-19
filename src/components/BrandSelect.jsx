import { BRANDS } from "../utils/constants";

const BrandSelect = () => {
    return (
        <div className="my-5">
            <label
                htmlFor="brand"
                className="block mb-3 font-bold text-gray-400 uppercase"
            >
                Marca
            </label>

            <select
                name="brand"
                id="brand"
                className="w-full p-3 bg-white border border-gray-200"
            >
                <option value="">
                    -- Selecciona una marca --
                </option>

                {BRANDS.map((item) => {
                    return (
                        <option
                            key={item.id}
                            value={item.id}
                        >
                            {item.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
export default BrandSelect;