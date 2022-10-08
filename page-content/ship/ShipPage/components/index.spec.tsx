import { render, screen } from "@testing-library/react";
import { ShipDetailsItem } from ".";

// An improvement here would be to type this
const baseProps = {
    title: 'title',
    value: 'value'
}

describe("Given a ShipDetailsItem Component", () => {
    describe("When it is displayed", () => {
        beforeEach(() => {
            render(<ShipDetailsItem {...baseProps}  />);
        });

        test("Then the ShipDetailsItem component should be rendered in the DOM", () => {
            const shipDetailsItemCmp = screen.getByTestId("ship-details-item-test-id");
            expect(shipDetailsItemCmp).toBeInTheDocument();
        });

        test("Then the title should be rendered correctly", () => {
            expect(screen.getByText("title")).toBeInTheDocument();
        });

        test("Then the value should be rendered correctly", () => {
            expect(screen.getByText("value")).toBeInTheDocument();
        });
    });
});