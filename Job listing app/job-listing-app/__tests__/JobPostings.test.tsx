import { render, screen } from "@testing-library/react";
import JobPostings from "@/app/components/JobPostings";


describe("JobPostings Component", () => {
  test("renders job not found message when no jobs are available", async () => {
    // Mock the fetch response with no job postings
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => ({
        data: [],
      }),
    });

    render(<JobPostings />);

    // Use a flexible matcher to find the "No job opportunities found." text
    const noJobsMessage = await screen.findByText((content) =>
      /no job opportunities found/i.test(content)
    );

    expect(noJobsMessage).toBeInTheDocument();
  });
});
