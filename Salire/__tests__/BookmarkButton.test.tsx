import { render, screen, fireEvent } from '@testing-library/react';
import { act } from "react";
import BookmarkButton from '@/app/components/BookmarkButton'  // Adjust the path if needed

jest.mock('../app/types')

describe('BookmarkButton', () => {
  test('renders correctly and toggles bookmark state', async () => {
    // Initial render with `marked` as false
    render(<BookmarkButton id="test-job-id" marked={false} />);
    
    // Check if the unmarked icon is present
    expect(screen.getByRole('button')).toHaveTextContent('');

    // Simulate a click to add the bookmark using act()
    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
    });

    // Check if the marked icon appears
    expect(screen.getByRole('button')).toHaveTextContent('');

    // Simulate another click to remove the bookmark using act()
    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
    });

    // Check if the unmarked icon reappears
    expect(screen.getByRole('button')).toHaveTextContent('');
  });
});
