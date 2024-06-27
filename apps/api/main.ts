import express from "express";
import cors from "cors";

import requestsData from "./requests-data.json";

const app = express();
const port = 3001;

// Middlewares
app.use(cors());

// Routes
app.get("/", (_, res) => {
    res.send("Hello world!");
});

// New endpoint for request data
app.get("/requests", (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const sortedRequests = requestsData.sort(
        (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const paginatedRequests = sortedRequests.slice(startIndex, endIndex);

    res.json({
        requests: paginatedRequests,
        total: requestsData.length,
        page: parseInt(page as string, 10),
        limit: parseInt(limit as string, 10),
    });
});

// App start
app.listen(port, () => {
    console.log(`API is listening on port ${port}`);
});
