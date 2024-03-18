import ExampleContextProvider from "./context/example_context";
import AboutPage from "./pages/about";

export default function App() {
	return (
		<ExampleContextProvider>
			<div>
				<AboutPage />
			</div>
		</ExampleContextProvider>
	);
}
