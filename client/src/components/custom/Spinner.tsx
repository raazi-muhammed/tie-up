import ClipLoader from "react-spinners/ClipLoader";

function Spinner({ isLoading }: { isLoading: boolean }) {
    const color = "#fff";

    return (
        <div
            className={`w-full grid place-items-center ${
                isLoading ? "m-4" : ""
            }`}
        >
            <ClipLoader
                color={color}
                loading={isLoading}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Spinner;
