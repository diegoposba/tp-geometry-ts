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
    it("test translate", () => {
        const l = new LineString([new Point([0.0,0.0]), new Point([3.0,4.0])]);
        l.translate(1.0,2.0);
        expect(l.getPointN(0).getCoordinate()).to.deep.equal([1.0,2.0]);
        expect(l.getPointN(1).getCoordinate()).to.deep.equal([4.0,6.0]);
    });
    it("test translate empty linestring", () => {
        const l = new LineString();
        l.translate(1.0,2.0);
        expect(l.isEmpty()).to.be.true;
    });
    it("test clone", () => {
        const l = new LineString([new Point([0.0,0.0]), new Point([3.0,4.0])]);
        const copy = l.clone();
        expect(copy).to.not.equal(l);
        expect(copy.getNumPoints()).to.equal(2);
        expect(copy.getPointN(0)).to.not.equal(l.getPointN(0));
        copy.translate(10.0,10.0);
        expect(copy.getPointN(1).getCoordinate()).to.deep.equal([13.0,14.0]);
        expect(l.getPointN(0).getCoordinate()).to.deep.equal([0.0,0.0]);
        expect(l.getPointN(1).getCoordinate()).to.deep.equal([3.0,4.0]);
    });
    it("test clone empty linestring", () => {
        const copy = new LineString().clone();
        expect(copy.isEmpty()).to.be.true;
    });
    it("test getEnvelope", () => {
        const l = new LineString([
            new Point([0.0,1.0]),
            new Point([2.0,0.0]),
            new Point([1.0,3.0])
        ]);
        expect(l.getEnvelope().toString()).to.equal("[0,0,2,3]");
    });
    it("test getEnvelope empty linestring", () => {
        expect(new LineString().getEnvelope().isEmpty()).to.be.true;
    });
    it("test asText", () => {
        const l = new LineString([
            new Point([0.0,0.0]),
            new Point([1.0,1.0]),
            new Point([5.0,5.0])
        ]);
        expect(l.asText()).to.equal("LINESTRING(0.0 0.0,1.0 1.0,5.0 5.0)");
        expect(new LineString().asText()).to.equal("LINESTRING EMPTY");
    });
});
