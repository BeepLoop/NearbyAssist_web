import React, { ReactNode, useState } from "react";
import CreateAccountForm from "../components/CreateAccountForm";

interface Account {
    [x: string]: ReactNode;
    id: number;
    username: string;
    email: string;
    role: string;
    status: string;
}
export default function AssistantPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    function handleSearchChange(e: {
        target: { value: React.SetStateAction<string> };
    }) {
        setSearchTerm(e.target.value);
    }

    function handleCreateAccount(
        username: string,
        email: string,
        password: string,
        role: string
    ) {
        const confirmed = window.confirm(
            "Are you sure you want to create this account?"
        );
        if (confirmed) {
            const newAccount: Account = {
                id: accounts.length + 1,
                username,
                email,
                password,
                role,
                status: "Active",
            };
            setAccounts([...accounts, newAccount]);
            setIsCreatingAccount(false);
        }
    }

    function handleEdit(id: number) {
        const accountToEdit = accounts.find((account) => account.id === id);
        if (accountToEdit) {
            console.log("Editing account:", accountToEdit);
        } else {
            console.error("Account not found");
        }
    }

    function handleDelete(id: number) {
        const confirmed = window.confirm(
            "Are you sure you want to delete this account?"
        );
        if (confirmed) {
            console.log("Deleting account with ID:", id);
            const updatedAccounts = accounts.filter(
                (account) => account.id !== id
            );
            setAccounts(updatedAccounts);
        }
    }

    function handleToggleStatus(id: number) {
        const updatedAccounts = accounts.map((account) => {
            if (account.id === id) {
                return {
                    ...account,
                    status: account.status === "Enable" ? "Disable" : "Enable",
                };
            }
            return account;
        });

        setAccounts(updatedAccounts);
    }

    return (
        <div className="flex-1 p-4">
            <header className="flex justify-between items-center bg-gray-500 px-4 py-4 text-white">
                <h1 className="font-semibold text-2xl">Assistant Page</h1>
                <button
                    className="bg-green-500 hover:bg-green-800 focus:shadow-outline px-4 py-2 rounded font-bold text-white focus:outline-none"
                    onClick={() => setIsCreatingAccount(true)}
                >
                    Create Account
                </button>
            </header>
            {isCreatingAccount && (
                <CreateAccountForm
                    onCreateAccount={handleCreateAccount}
                    onCancel={() => setIsCreatingAccount(false)}
                />
            )}

            <div className="flex justify-between items-center border-gray-200 bg-white shadow-md mb-2 p-4 border rounded-md">
                <h2 className="mb-2 font-semibold text-lg">Accounts Created</h2>
                <div className="flex justify-end mb-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-3 py-2 border rounded-md outline-none"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 ml-2 px-4 py-2 rounded-md text-white">
                        Search
                    </button>
                </div>
            </div>

            <div className="border-gray-200 bg-gray-100 shadow-md mb-4 p-6 border rounded-md overflow-x-auto">
                <table className="rounded-lg w-full">
                    <thead>
                        <tr className="border-gray-800 bg-gray-600 border">
                            <th className="px-6 py-3 font-medium text-left text-white">
                                No.
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Username
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Email
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Password
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Role
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Action
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-white">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map((account, index) => (
                            <tr
                                key={account.id}
                                className="border-gray-800 border"
                            >
                                <td className="px-6">{index + 1}</td>
                                <td className="px-6">{account.username}</td>
                                <td className="px-6">{account.email}</td>
                                <td className="px-6">{account.password}</td>
                                <td className="px-6">{account.role}</td>
                                <td className="py-2">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 focus:shadow-outline px-2 py-1 rounded font-bold text-white focus:outline-none"
                                        onClick={() => handleEdit(account.id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 focus:shadow-outline ml-2 px-2 py-1 rounded font-bold text-white focus:outline-none"
                                        onClick={() => handleDelete(account.id)}
                                    >
                                        Delete
                                    </button>
                                </td>

                                <td className="flex justify-between items-center py-2">
                                    <label className="flex items-center pt-1 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            defaultValue=""
                                            checked={
                                                account.status === "Enable"
                                            }
                                            className="peer sr-only"
                                            onChange={() =>
                                                handleToggleStatus(account.id)
                                            }
                                        />
                                        <div className="relative bg-gray-600 w-9 h-5 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-blue-800 after:top-[2px] after:absolute after:content-[''] peer-checked:after:border-white after:border-gray-300 dark:border-gray-600 after:bg-white dark:bg-gray-700 peer-checked:bg-blue-600 after:border rounded-full after:rounded-full after:w-4 after:h-4 after:transition-all peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer after:start-[2px]"></div>
                                        <span className="font-medium text-gray-900 text-sm dark:text-gray-300 ms-3">
                                            {account.status === "Enable"
                                                ? "Enabled"
                                                : "Disabled"}
                                        </span>
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
