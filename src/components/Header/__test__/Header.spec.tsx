import { render, screen } from "@testing-library/react";
import Header from "..";

describe("Header", () => {
    beforeEach(() => {
        render(<Header />);
    });

    it("should render image header", () => {
        const headerImg = screen.getByRole("img");

        expect(headerImg).toBeInTheDocument();
    });

    it("should render image header with alt text", () => {
        const headerAltTextImg = screen.queryByAltText(/Experts club logo/i);

        expect(headerAltTextImg).toBeInTheDocument();
    });
});
