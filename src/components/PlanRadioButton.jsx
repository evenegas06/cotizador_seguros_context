import { Fragment } from "react";
import { PAYMENT_PLANS } from "../utils/constants";

const PlanRadioButton = () => {
    return (
        <div className="my-5">
            <label
                htmlFor="brand"
                className="block mb-3 font-bold text-gray-400 uppercase"
            >
                Elige un plan
            </label>

            <div className="flex gap-3 items-center">
                {PAYMENT_PLANS.map((item) => {
                    return (
                        <Fragment key={item.id}>
                            <label htmlFor="plan">
                                {item.id}
                            </label>

                            <input
                                type="radio"
                                name="plan"
                                id="plan"
                                value={item.id}
                            />
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
};
export default PlanRadioButton;