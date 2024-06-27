import React, { useEffect, useState } from "react";
interface Request {
    id: string;
    title: string;
    author: string;
    createdAt: string;
    published: string;
    auction: string;
}

const RequestList: React.FC = () => {
    const [requests, setRequests] = useState<Request[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 10;
    useEffect(() => {
        const fetchRequests = async () => {
            setLoading(true);
            setError(false);
            try {
                const response = await fetch(
                    `/api/requests?page=${page}&limit=${limit}`
                );
                const data = await response.json();
                setRequests(data.requests);
                setTotal(data.total);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, [page]);

    if (loading) return <div>Loading</div>;
    if (error) return <div>Error</div>;
    if (!requests.length) return <div>No requests</div>;
    const totalPages = Math.ceil(total / limit);

    return (
        <div>
            <h1>Request List</h1>
            {requests.map((request) => (
                <div key={request.id} className="request-card">
                    <h2>{request.title}</h2>
                    <p>{new Date(request.createdAt).toLocaleDateString()}</p>
                    <p>{request.author}</p>
                </div>
            ))}
            <div className="pagination">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Previous
                </button>
                <div>
                    Page {page} of {totalPages}
                </div>
                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default RequestList;
