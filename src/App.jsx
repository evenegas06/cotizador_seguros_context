import Insurance from "./components/Insurance";
import { QuoterProvider } from "./context/QuoterContext";

function App() {
    return (
        <QuoterProvider>
            <Insurance />
        </QuoterProvider>
    );
}

export default App;
