import { render, screen, waitFor, within } from "@testing-library/react";
import JobPostings from "@/app/components/JobPostings";

// Mock the useEffect to prevent actual API calls
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("JobPostings Component", () => {
  test("renders job not found message when no jobs are available", async () => {
    // Mock the fetch response with no job postings
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: [], // No jobs returned
      }),
    });

    render(<JobPostings />);

    // Wait for the loading state to disappear
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    // Check for the "No job opportunities found." text
    const noJobsMessage = await screen.findByText(
      /no job opportunities found/i
    );
    expect(noJobsMessage).toBeInTheDocument();
  });

  test("renders job posting cards when jobs are available", async () => {
    // Mock the fetch response with some job postings
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: [
          {
            id: 1,
            title: "Software Engineer",
            orgName: "Tech Corp",
            location: ["San Francisco, CA"],
            description: "Join our team as a Software Engineer.",
            logoUrl: null,
            opType: "Full-time",
            isBookmarked: false,
          },
        ],
      }),
    });

    render(<JobPostings />);

    // Wait for the loading state to disappear
    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    // Use `within` to narrow down the search within the job card
    const jobCard = screen.getByTestId("joblist-card0");
    const title = within(jobCard).getByRole("heading", {
      name: /software engineer/i,
    });
    const company = within(jobCard).getByText(/tech corp/i);
    const location = within(jobCard).getByText(/san francisco, ca/i);
    const description = within(jobCard).getByText(
      /join our team as a software engineer/i
    );

    expect(title).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(description).toBeInTheDocument();

    // Check that the bookmark button is rendered
    const bookmarkButton = within(jobCard).getByTestId("bookmark-button0");
    expect(bookmarkButton).toBeInTheDocument();
  });
});
