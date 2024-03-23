import { Route, Routes } from "react-router-dom";
import ExampleContextProvider from "./context/example_context";
import ExamplePage from "./pages/example_page";
import HomePage from "./pages/home_page";
import LoginPage from "./pages/login_page";

export default function App() {
    return (
        <ExampleContextProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/example" element={<ExamplePage />} />
            </Routes>
        </ExampleContextProvider>
    );
}
