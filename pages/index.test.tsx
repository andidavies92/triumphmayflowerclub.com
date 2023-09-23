import Home from "pages/index";

import { jest } from "@jest/globals";
import { render } from "@testing-library/react";

describe("Homepage", () => {
    it("renders without error", () => {
        const sut = jest.fn(() => render(<Home />));
        sut();
        expect(sut).toBeCalledTimes(1);
    });
});
