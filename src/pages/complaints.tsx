import React, { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import useRequest from "../hooks/use_request";
import useStorage from "../hooks/use_storage";

type Complaint = {
    id: number;
    name: string;
    date: string;
};

type ComplaintsResponse = {
    complaints: Complaint[];
    total: number;
};

export default function Complaints() {
    const [complaints, setComplaints] = useState<Complaint[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalEntries, setTotalEntries] = useState<number>(0);
    const [entriesPerPage, setEntriesPerPage] = useState<number>(5);
    const { send, isLoading } = useRequest();
    const { getSavedUser } = useStorage();

    useEffect(
        function () {
            fetchComplaints();
        },
        [currentPage, searchTerm, entriesPerPage]
    );

    async function fetchComplaints() {
        const serverAddr = import.meta.env.VITE_BACKEND_URL;
        const url = `${serverAddr}/v1/admin/complaints/system`;
        const user = getSavedUser();
        if (user === null) {
            console.log("No user data found");
            return;
        }

        try {
            const response = await send<ComplaintsResponse>(
                user.accessToken,
                url,
                "GET"
            );
            if (response.success) {
                const data = response.data as ComplaintsResponse;
                setComplaints(data.complaints);
                setTotalEntries(data.total);
            } else {
                console.log("Failed to fetch complaints");
            }
        } catch (error) {
            console.error("Error fetching complaints:", error);
        }
    }

    function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    }

    function handleSearch(event: React.FormEvent) {
        event.preventDefault();
        fetchComplaints();
    }

    function handlePageChange(direction: string) {
        if (direction === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (
            direction === "next" &&
            currentPage * entriesPerPage < totalEntries
        ) {
            setCurrentPage(currentPage + 1);
        }
    }

    function handleEntriesChange(event: ChangeEvent<HTMLSelectElement>) {
        setEntriesPerPage(parseInt(event.target.value, 10));
        setCurrentPage(1);
    }

    return (
        <div className="flex-1 p-4">
            <div className="bg-primary px-4 py-4 text-white">
                <h1 className="font-semibold text-2xl">User Complaints</h1>
                <div className="flex justify-between items-center mx-auto">
                    <div className="flex justify-start items-center">
                        <p className="mr-4 font-semibold text-lg">Show</p>
                        <select
                            value={entriesPerPage}
                            onChange={handleEntriesChange}
                            className="border-white bg-primary-greener px-3 py-1 border rounded-md text-white outline-none"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                            <option value={25}>25</option>
                        </select>
                    </div>
                    <div className="flex justify-end mb-2 text-black">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="border-white px-3 py-2 border rounded-md outline-none"
                        />
                        <button
                            onClick={handleSearch}
                            className="border-white bg-primary-greener hover:bg-primary-pale ml-2 px-4 py-2 border rounded-md font-semibold text-white"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <table className="mt-4 border rounded-lg w-full">
                <thead>
                    <tr className="bg-primary-greener">
                        <th className="px-6 py-3 font-medium text-left text-white">
                            Complaint ID
                        </th>
                        <th className="px-6 py-3 font-medium text-left text-white">
                            Complainant Name
                        </th>
                        <th className="px-6 py-3 font-medium text-left text-white">
                            Action
                        </th>
                        <th className="px-6 py-3 font-medium text-left text-white">
                            Date and Time
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {complaints.length === 0 && !isLoading && (
                        <tr>
                            <td colSpan={4} className="py-4 text-center">
                                <p>There are no complaints data</p>
                            </td>
                        </tr>
                    )}

                    {isLoading ? (
                        <tr>
                            <td colSpan={4} className="py-4 text-center">
                                ...
                            </td>
                        </tr>
                    ) : (
                        complaints.map(function (complaint, index) {
                            return (
                                <tr key={complaint.id} className="border">
                                    <td className="px-6 py-4">
                                        {(
                                            (currentPage - 1) * entriesPerPage +
                                            index +
                                            1
                                        ).toString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        {complaint.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link
                                            to={`/complaints/${complaint.id}`}
                                            className="text-blue hover:underline"
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4">
                                        {complaint.date}
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>

            <div className="mx-auto p-4">
                <div className="relative">
                    <span className="bottom left-0 absolute mt-2 text-sm">
                        Showing{" "}
                        <span className="font-semibold text-gray-darkgray dark:text-white">
                            {isNaN((currentPage - 1) * entriesPerPage + 1)
                                ? 0
                                : (currentPage - 1) * entriesPerPage + 1}
                        </span>{" "}
                        to{" "}
                        <span className="font-semibold text-gray-darkgray dark:text-white">
                            {isNaN(
                                Math.min(
                                    currentPage * entriesPerPage,
                                    totalEntries
                                )
                            )
                                ? 0
                                : Math.min(
                                      currentPage * entriesPerPage,
                                      totalEntries
                                  )}
                        </span>{" "}
                        of{" "}
                        <span className="font-semibold text-gray-darkgray dark:text-white">
                            {isNaN(totalEntries) ? 0 : totalEntries}
                        </span>{" "}
                        Entries
                    </span>
                    <div className="inline-flex right-0 absolute">
                        <button
                            onClick={function () {
                                handlePageChange("prev");
                            }}
                            className="flex justify-center items-center bg-gray hover:bg-gray-darkgray dark:hover:bg-gray dark:bg-gray-darkgray px-3 rounded-s h-8 font-medium text-sm text-white dark:hover:text-white dark:text-gray"
                        >
                            <svg
                                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 5H1m0 0 4 4M1 5l4-4"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={function () {
                                handlePageChange("next");
                            }}
                            className="flex justify-center items-center bg-gray hover:bg-gray-darkgray dark:hover:bg-gray dark:bg-gray-darkgray px-3 rounded-e h-8 font-medium text-sm text-white dark:hover:text-white dark:text-gray"
                        >
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
