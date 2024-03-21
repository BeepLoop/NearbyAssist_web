import { Route, Routes } from "react-router-dom";
import ExampleContextProvider from "./context/example_context";
import ExamplePage from "./pages/example_page";

export default function App() {
    return (
        <ExampleContextProvider>
            <Routes>
                <Route path="/example" element={<ExamplePage />} />
            </Routes>
        </ExampleContextProvider>
    );
}
