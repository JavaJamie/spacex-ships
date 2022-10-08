import userEvent from "@testing-library/user-event";
import { Card } from ".";
import { render, screen } from "@testing-library/react";

const onClick = jest.fn();

const baseProps = {
  label: "label",
  description: "description",
};

describe("Given a Card Component", () => {
  describe("When it is not loading", () => {
    describe("When it is rendered with minimal props", () => {
      beforeEach(() => {
        render(<Card {...baseProps} />);
      });

      test("Then the label should be rendered correctly", () => {
        expect(screen.getByText("label")).toBeInTheDocument();
      });

      test("Then the description should be rendered correctly", () => {
        expect(screen.getByText("label")).toBeInTheDocument();
      });
    });

    describe("When the onClick prop is provided", () => {
      beforeEach(() => {
        render(<Card {...baseProps} onClick={onClick} />);
      });

      describe("When clicking the Card componnent", () => {
        beforeEach(async () => {
          jest.clearAllMocks();
          await userEvent.click(screen.getByText("label"));
        });

        test("Then the onClick function should have been called", () => {
          expect(onClick).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
