import useQuoter from "../hooks/useQuoter";

const ErrorMessage = () => {
    const { error } = useQuoter();

    return (
        <div>
            <p className="border text-center border-red-400 bg-red-100 py-3 text-red-700">
                {error}
            </p>
        </div>
    );
};
export default ErrorMessage;