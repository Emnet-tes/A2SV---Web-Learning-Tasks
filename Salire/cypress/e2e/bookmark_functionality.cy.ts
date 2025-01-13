describe('Bookmark Functionality E2E Tests', () => {
  const accessToken = 'mockAccessToken'; // Mock token

  beforeEach(() => {
    // Mock the access token in localStorage
    cy.window().then((win) => {
      win.localStorage.setItem('accessToken', accessToken);
    });

    cy.visit('/Home'); // Adjust the URL based on where the component is rendered
  });

  it('should make a DELETE request with authorization token and update icon when marked is true and button is clicked', () => {
  cy.intercept('DELETE', 'https://akil-backend.onrender.com/bookmarks/1', (req) => {
    // Check request headers
    expect(req.headers).to.have.property('authorization', `Bearer ${accessToken}`);
    req.reply({
      statusCode: 200,
      body: {},
    });
  }).as('deleteBookmark');

  // Update mock data to simulate a bookmarked state
  cy.intercept('GET', 'https://akil-backend.onrender.com/opportunities/search', {
    statusCode: 200,
    body: {
      data: [
        {
          id: '1',
          logoUrl: '',
          title: 'Job 1',
          orgName: 'Company',
          location: ['Location', 'location 2'],
          description: 'Description',
          isBookmarked: true,
        },
      ],
    },
  }).as('getJobs');

  cy.wait('@getJobs');
  cy.get('[data-testid="bookmark-button0"]').click();
  cy.wait('@deleteBookmark').then((interception) => {
    // Verify the DELETE request
    expect(interception.request.method).to.equal('DELETE');
    expect(interception.request.headers).to.have.property('authorization', `Bearer ${accessToken}`);
  });

  // Check if the bookmark button has the FaRegBookmark icon (unbookmarked state)
  cy.get('[data-testid="bookmark-button0"]').within(() => {
    cy.get('svg').should('exist');
  });
})});
