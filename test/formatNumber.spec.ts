import { describe, it, expect } from "vitest";
import formatNumber from "../src/formatNumber";

describe("test formatNumber", () => {
    it("test integer keeps one decimal", () => {
        expect(formatNumber(3)).to.equal("3.0");
        expect(formatNumber(-2)).to.equal("-2.0");
    });
    it("test decimal is unchanged", () => {
        expect(formatNumber(1.25)).to.equal("1.25");
    });
});
