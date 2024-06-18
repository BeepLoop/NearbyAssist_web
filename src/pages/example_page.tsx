import ExampleButton from "../components/example_button";
import UseExampleContext from "../hooks/use_example_context";
import useRequest from "../hooks/use_request";
import useStorage from "../hooks/use_storage";

export default function ExamplePage() {
    const { value } = UseExampleContext();

    const { send, isLoading } = useRequest();
    const { getSavedUser } = useStorage();

    async function sample() {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/v1/health`;

        const user = getSavedUser();
        if (user === null) {
            console.log("no user data found");
            return;
        }

        try {
            const response = await send(user.accessToken, url, "GET");
            if (response === null) {
                console.log("Request failed");
                return;
            }

            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <h1 className="my-2">This is from example page</h1>
            <p className="my-2">context value: {value}</p>
            <ExampleButton title={isLoading ? "loading..." : "test request"} action={sample} styles="rounded bg-primary p-2" />
        </div>
    );
}
