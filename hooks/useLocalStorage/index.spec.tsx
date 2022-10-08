import { act, fireEvent, render, screen } from "@testing-library/react";
import { useLocalStorage } from ".";

describe("Given a TestComponent Component", () => {
    describe("When local storage is updated", () => {

        beforeEach(() => {
            render(<TestComponent initialValue="Jamie" />);

            Object.defineProperty(window, "localStorage", {
                value: {
                  getItem: jest.fn(() => null),
                  setItem: jest.fn(() => null)
                },
                writable: true
            });
        });
    
        test("Expect the value to be set", async() => {
            const setNameButton = screen.getByTestId('set-name-button');

            await act(async () => {
                fireEvent.click(setNameButton);
            });

            expect(screen.getByText("Lee")).toBeInTheDocument();
            expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
        });
    });
});

const TestComponent = ({ initialValue }: { initialValue: string }) => {
    const [storedValue, setStoredValue] = useLocalStorage('Name', initialValue);

    return (
        <>
            <p data-testid="name-text">{storedValue}</p>
            <button data-testid="set-name-button" onClick={() => setStoredValue('Lee')}>Set name</button>
        </>
    );
}