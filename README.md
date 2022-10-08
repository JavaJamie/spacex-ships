# SpaceX Ships

## Getting started

### Dependencies

Main technologies : React, Material UI, Apollo, Jest, React Testing Library

- Clone the project
- Run `yarn install` at its root

### Running the project

- Run `yarn dev` to run the project locally

### Running unit tests

- Run `yarn test`

## Instructions

The purpose of this test is to show a list of ships using SpaceX GraphQL API : https://api.spacex.land/graphql/ Every feature/components implemented in this test should be unit tested. There is an example of how the unit tests should be written at SpaceX Ships in `components/Card/index.spec.tsx`. UX, code quality, accessibility will be taken in account when reviewing the test.

- Complete the HomePage component by showing the ships returned when using the query implemented in `api/ship/queries/getShips.ts`. The results should be loaded using an infinite scroll.
- Create a simple details page showing the details about a boat. This page should be accessible by clicking a Learn More button in the ships cards shown on the home page.
- Set up basic Open Graph tags for both the home page and the details page.
- BONUS : There is a hook in `hooks/useLocalStorage/index.ts` which should not be useful for the previous questions. Please write unit tests for this hook.

## What would you improve in this test ?
1. Provide a SSG/SSR approach as alternatives. The _app.tsx file assumes a CSR approach as the created ApolloClient is created on the client side (so this would not be known at build time). Alternatively,
to use this in a SSG/SSR fashion, you can create the client in getStaticProps/getServerSideProps and make the data fetch this way. As the client was created in the _app, I've adhered to the design in place.
I have attached code samples in comments of how this could be done via SSG/SSR on the ShipPage.
2. Create css/sass/modules/styled components for the styling.
3. Create paths in the tsconfig.json so that we can import via aliases and not having to manually traverse different folders.
4. Add more tests (test different edge cases etc).
5. Fix the errors inside _document.tsx. These came with the cloned project so I left them untouched.
6. Display more ship details
7. Create GraphQL fragments for shared fields between ships and ship queries (of which there are a few). Along with graphql-codegen, this would then create types for the fragments as well as the queries
themselves.

### Any technologies you would add to improve the project/code quality?
1. Introduce Mock Service Worker to mock intercepting requests at the network level for better test coverage.
2. Prettier.
3. Husky.
4. Consider alternatives to ApolloClient (such as URQL which is pretty good and more lightweight).
5. graphql-codegen.

### About your own implementation ?
I have made some assumptions based on how the project was setup. As the ApolloClient instance was created on the client inside inside _app, this instance would not be known at build time so I presumed that
a CSR approach wouuld be best (I have, however, detailed on the ShipPage how it could be done via a SSG/SSR approach!). Also, I am not aware how often the ship details are updated on the SpaceX API (if they're
updated infrequently then I would attest to a SSG being the preferable choice here).

I have created only a few components that I deemed necessary and have added some basic tests for these. Ideally the network requests to the Spacex API would also be mocked via MSW to give us an extra layer
of confidence in the tests.