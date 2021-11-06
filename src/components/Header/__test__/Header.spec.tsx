import { render, screen, fireEvent } from "@testing-library/react";
import Header from "..";

describe("Header", () => {
    it("should render image header", () => {
        render(<Header />);
        const headerImg = screen.getByRole("img");

        expect(headerImg).toBeInTheDocument();
    });

    it("should render image header with alt text", () => {
        render(<Header />);
        const headerAltTextImg = screen.queryByAltText(/Experts club logo/i);

        expect(headerAltTextImg).toBeInTheDocument();
    });

    it("should render a title 'RS Analytics'", () => {
        render(<Header />);
        const headerText = screen.queryByText(/RS Analytics/i);

        expect(headerText).toBeInTheDocument();
    });

    it("should render a description text 'Acompanhe a quantidade de acesso...'", () => {
        render(<Header />);
        const text = screen.queryByText(/Acompanhe a quantidade de acesso/i);

        expect(text).toBeInTheDocument();
    });

    it("should be able to change the select default value", () => {
        render(<Header />);
        expect(screen.getByText("Selecione um período")).toBeInTheDocument();

        fireEvent.change(screen.getByTestId("select-period-id"), {
            target: { value: "last_week" },
        });
        expect(screen.getByText("Semana passada")).toBeInTheDocument();
    });

    it("should call the api on select change ", () => {
        render(<Header />);

        expect(screen.getByText("Selecione um período")).toBeInTheDocument();

        fireEvent.change(screen.getByTestId("select-period-id"), {
            target: { value: "last_week" },
        });

        expect(screen.getByText("Semana passada")).toBeInTheDocument();
    });
});
