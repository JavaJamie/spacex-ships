import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "..";

const errorLabel = "error";

describe("Given an ErrorMessage Component", () => {
    describe("When it is displayed", () => {
        beforeEach(() => {
            render(<ErrorMessage error={errorLabel} />);
        });

        test("Then the ErrorMessage component should be rendered in the DOM", () => {
            const errorMessageCmp = screen.getByTestId("error-message-component");
            expect(errorMessageCmp).toBeInTheDocument();
        });

        test("Then the error should be rendered correctly", () => {
            expect(screen.getByText("error")).toBeInTheDocument();
        });
    });
});