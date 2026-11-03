import { describe, it, expect } from "vitest";
import Geometry from "../src/Geometry";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter";

describe("test WktWriter", () => {
    const writer = new WktWriter();

    it("test empty point", () => {
        expect(writer.write(new Point())).to.equal("POINT EMPTY");
    });
    it("test point", () => {
        expect(writer.write(new Point([3.0,4.0]))).to.equal("POINT(3.0 4.0)");
    });
    it("test point with decimals", () => {
        expect(writer.write(new Point([1.25,-2.5]))).to.equal("POINT(1.25 -2.5)");
    });
    it("test empty linestring", () => {
        expect(writer.write(new LineString())).to.equal("LINESTRING EMPTY");
    });
    it("test linestring", () => {
        const l = new LineString([
            new Point([0.0,0.0]),
            new Point([1.0,1.0]),
            new Point([5.0,5.0])
        ]);
        expect(writer.write(l)).to.equal("LINESTRING(0.0 0.0,1.0 1.0,5.0 5.0)");
    });
    it("test unsupported geometry type", () => {
        const g = { getType: () => "Unknown" } as unknown as Geometry;
        expect(() => writer.write(g)).to.throw(TypeError, "geometry type not supported");
    });
});
