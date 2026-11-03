import { describe, it, expect } from "vitest";
import Geometry from "../src/Geometry";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktVisitor from "../src/WktVisitor";

function toWkt(geometry: Geometry): string {
    const visitor = new WktVisitor();
    geometry.accept(visitor);
    return visitor.getResult();
}

describe("test WktVisitor", () => {
    it("test initial result is empty", () => {
        expect(new WktVisitor().getResult()).to.equal("");
    });
    it("test empty point", () => {
        expect(toWkt(new Point())).to.equal("POINT EMPTY");
    });
    it("test point", () => {
        expect(toWkt(new Point([3.0,4.0]))).to.equal("POINT(3.0 4.0)");
    });
    it("test point with decimals", () => {
        expect(toWkt(new Point([1.25,-2.5]))).to.equal("POINT(1.25 -2.5)");
    });
    it("test empty linestring", () => {
        expect(toWkt(new LineString())).to.equal("LINESTRING EMPTY");
    });
    it("test linestring", () => {
        const l = new LineString([
            new Point([0.0,0.0]),
            new Point([1.0,1.0]),
            new Point([5.0,5.0])
        ]);
        expect(toWkt(l)).to.equal("LINESTRING(0.0 0.0,1.0 1.0,5.0 5.0)");
    });
});
