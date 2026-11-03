import { describe, it, expect } from "vitest";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(p.isEmpty()).to.be.true;
        expect(Number.isNaN(p.x())).to.be.true;
        expect(Number.isNaN(p.y())).to.be.true;
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getType()).to.equal("Point");
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.isEmpty()).to.be.false;
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
});

