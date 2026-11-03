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
    it("test translate", () => {
        const p = new Point([3.0,4.0]);
        p.translate(1.0,2.0);
        expect(p.getCoordinate()).to.deep.equal([4.0,6.0]);
    });
    it("test translate empty point", () => {
        const p = new Point();
        p.translate(1.0,2.0);
        expect(p.isEmpty()).to.be.true;
    });
    it("test clone", () => {
        const p = new Point([3.0,4.0]);
        const copy = p.clone();
        expect(copy).to.not.equal(p);
        expect(copy.getCoordinate()).to.deep.equal([3.0,4.0]);
        copy.translate(10.0,10.0);
        expect(copy.getCoordinate()).to.deep.equal([13.0,14.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
    });
    it("test clone empty point", () => {
        const copy = new Point().clone();
        expect(copy.isEmpty()).to.be.true;
    });
    it("test getEnvelope", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getEnvelope().toString()).to.equal("[3,4,3,4]");
    });
    it("test getEnvelope empty point", () => {
        expect(new Point().getEnvelope().isEmpty()).to.be.true;
    });
    it("test asText", () => {
        expect(new Point([3.0,4.0]).asText()).to.equal("POINT(3.0 4.0)");
        expect(new Point().asText()).to.equal("POINT EMPTY");
    });
});

