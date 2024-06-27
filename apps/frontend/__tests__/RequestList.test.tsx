// __tests__/RequestList.test.tsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RequestList from "../views/requestList";

// Mock the fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                requests: [
                    {
                        id: "1",
                        headline: "First Request",
                        date: "2023-06-15T14:48:00.000Z",
                        user: "Alice",
                    },
                ],
                total: 1,
            }),
    })
) as jest.Mock;

describe("RequestList", () => {
    test("renders loading state initially", () => {
        render(<RequestList />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("renders error state when fetch fails", async () => {
        (fetch as jest.Mock).mockImplementationOnce(() =>
            Promise.reject(new Error("Fetch failed"))
        );
        render(<RequestList />);
        await waitFor(() =>
            expect(screen.getByText("Error")).toBeInTheDocument()
        );
    });

    test("renders no requests state when no data is returned", async () => {
        (fetch as jest.Mock).mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve({ requests: [], total: 0 }),
            })
        );
        render(<RequestList />);
        await waitFor(() =>
            expect(screen.getByText("No requests")).toBeInTheDocument()
        );
    });

    test("renders request list successfully", async () => {
        render(<RequestList />);
        await waitFor(() => {
            expect(screen.getByText("Request List")).toBeInTheDocument();
            expect(screen.getByText("First Request")).toBeInTheDocument();
            expect(screen.getByText("Alice")).toBeInTheDocument();
        });
    });

    test("renders pagination controls", async () => {
        render(<RequestList />);
        await waitFor(() => {
            expect(screen.getByText("Page 1 of 1")).toBeInTheDocument();
            expect(screen.getByText("Previous")).toBeDisabled();
            expect(screen.getByText("Next")).toBeDisabled();
        });
    });
});
