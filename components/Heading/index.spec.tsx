import { render, screen } from "@testing-library/react";
import { Heading } from "..";

// An improvement here would be to type this
const baseProps = {
    title: 'title',
    subtitle: 'subtitle'
}

describe("Given a Heading Component", () => {
    describe("When it is displayed", () => {
        beforeEach(() => {
            render(<Heading {...baseProps}  />);
        });

        test("Then the Heading component should be rendered in the DOM", () => {
            const headingMessageCmp = screen.getByTestId("heading-component");
            expect(headingMessageCmp).toBeInTheDocument();
        });

        test("Then the title should be rendered correctly", () => {
            expect(screen.getByText("title")).toBeInTheDocument();
        });

        test("Then the subtitle should be rendered correctly", () => {
            expect(screen.getByText("subtitle")).toBeInTheDocument();
        });

        test("Then both the title and subtitle should be rendered correctly", () => {
            expect(screen.getByText("title")).toBeInTheDocument();
            expect(screen.getByText("subtitle")).toBeInTheDocument();
        });
    });
});