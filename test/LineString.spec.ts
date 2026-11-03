import { describe, it, expect } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LineString", () => {
    it("test default constructor", () => {
        const l = new LineString();
        expect(l.getType()).to.equal("LineString");
        expect(l.getNumPoints()).to.equal(0);
        expect(l.isEmpty()).to.be.true;
    });
    it("test constructor with points", () => {
        const p1 = new Point([0.0, 0.0]);
        const p2 = new Point([3.0, 4.0]);
        const l = new LineString([p1, p2]);
        expect(l.getType()).to.equal("LineString");
        expect(l.getNumPoints()).to.equal(2);
        expect(l.isEmpty()).to.be.false;
        expect(l.getPointN(0)).to.equal(p1);
        expect(l.getPointN(1)).to.equal(p2);
    });
});
