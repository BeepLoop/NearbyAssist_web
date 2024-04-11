import { useState } from "react";

interface CreateAccountFormProps {
    onCreateAccount: (
        username: string,
        email: string,
        password: string,
        role: string
    ) => void;
    onCancel: () => void;
}

export default function CreateAccountForm({
    onCreateAccount,
    onCancel,
}: CreateAccountFormProps) {
    const [newAccountName, setNewAccountName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [roleError, setRoleError] = useState(false);

    function handleCreateAccount() {
        if (
            !newAccountName ||
            !email ||
            !password ||
            !role ||
            !confirmPassword
        ) {
            setErrorMessage("Please fill in all the fields.");
            if (!newAccountName) setNameError(true);
            if (!email) setEmailError(true);
            if (!password) setPasswordError(true);
            if (!confirmPassword) setConfirmPasswordError(true);
            if (!role) setRoleError(true);
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Password and confirm password do not match.");
            return;
        }

        onCreateAccount(newAccountName, email, password, role);
        setNewAccountName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRole("");
        setErrorMessage("");
        setNameError(false);
        setEmailError(false);
        setPasswordError(false);
        setConfirmPasswordError(false);
        setRoleError(false);
    }
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
            <div className="bg-white shadow-md p-8 rounded-md max-w-md">
                <h2 className="mb-4 font-semibold text-lg">
                    Create New Account
                </h2>
                <div className="mb-4">
                    <label className="mb-1">Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        className={`px-3 py-2 border rounded-md outline-none ${
                            nameError ? "border-red-500" : ""
                        }`}
                        value={newAccountName}
                        onChange={(e) => {
                            setNewAccountName(e.target.value);
                            setNameError(false);
                        }}
                    />
                </div>
                <div className="mb-4">
                    <label className="mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className={`px-3 py-2 border rounded-md outline-none ${
                            emailError ? "border-red-500" : ""
                        }`}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError(false);
                        }}
                    />
                </div>
                <div className="mb-4">
                    <label className="mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className={`px-3 py-2 border rounded-md outline-none ${
                            passwordError ? "border-red-500" : ""
                        }`}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError(false);
                        }}
                    />
                </div>
                <div className="mb-4">
                    <label className="mb-1">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                        className={`px-3 py-2 border rounded-md outline-none ${
                            confirmPasswordError ? "border-red-500" : ""
                        }`}
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setConfirmPasswordError(false);
                        }}
                    />
                </div>
                <div className="mb-4">
                    <label className="mb-1">Role</label>
                    <select
                        className={`px-3 py-2 border rounded-md outline-none ${
                            roleError ? "border-red-500" : ""
                        }`}
                        value={role}
                        onChange={(e) => {
                            setRole(e.target.value);
                            setRoleError(false);
                        }}
                    >
                        <option value="">Select role</option>
                        <option value="Validator">Validator</option>
                        <option value="Complaint Handler">
                            Complaint Handler
                        </option>
                    </select>
                </div>
                {errorMessage && (
                    <p className="mb-4 text-red-500">{errorMessage}</p>
                )}
                <div className="flex justify-end">
                    <button
                        className="bg-green-500 hover:bg-green-800 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none mr-2"
                        onClick={handleCreateAccount}
                    >
                        Create
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-800 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
