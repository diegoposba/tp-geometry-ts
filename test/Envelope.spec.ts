import { describe, it, expect } from "vitest";
import Envelope from "../src/Envelope";

describe("test Envelope", () => {
    it("test default constructor", () => {
        const e = new Envelope();
        expect(e.isEmpty()).to.be.true;
        expect(Number.isNaN(e.getXmin())).to.be.true;
        expect(Number.isNaN(e.getYmin())).to.be.true;
        expect(Number.isNaN(e.getXmax())).to.be.true;
        expect(Number.isNaN(e.getYmax())).to.be.true;
        expect(e.toString()).to.equal("[NaN,NaN,NaN,NaN]");
    });
    it("test constructor with coordinates", () => {
        const e = new Envelope([0.0,1.0],[2.0,3.0]);
        expect(e.isEmpty()).to.be.false;
        expect(e.getXmin()).to.equal(0.0);
        expect(e.getYmin()).to.equal(1.0);
        expect(e.getXmax()).to.equal(2.0);
        expect(e.getYmax()).to.equal(3.0);
        expect(e.toString()).to.equal("[0,1,2,3]");
    });
});
