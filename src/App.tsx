import ExampleContextProvider from "./context/example_context";
import About from "./pages/about";
// import ExamplePage from "./pages/example_page";

export default function App() {
    return (
        <ExampleContextProvider>
            <div>
                <About />
            </div>
        </ExampleContextProvider>
    );
}
