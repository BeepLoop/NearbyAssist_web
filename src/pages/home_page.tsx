import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/example" className="text-blue hover:text-blue-lightblue">
                Example Page
            </Link>

            <Link to="/login" className="text-blue hover:text-blue-lightblue">
                Login Page
            </Link>
        </div>
    );
}
