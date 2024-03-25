import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/example" className="text-blue-500 hover:text-blue-400">
                Example Page
            </Link>
            <br></br>
            <Link to="/login" className="text-blue-500 hover:text-blue-400">
                Login Page
            </Link>
            <br></br>
            <Link to="/dashboard" className="text-blue-500 hover:text-blue-400">
                Dashboard Page
            </Link>
            <br></br>
            <Link
                to="/complaints"
                className="text-blue-500 hover:text-blue-400"
            >
                User Complaints Page
            </Link>
        </div>
    );
}
