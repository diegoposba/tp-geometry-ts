import { describe, it, expect } from "vitest";
import EnvelopeBuilder from "../src/EnvelopeBuilder";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test EnvelopeBuilder", () => {
    it("test build without insert", () => {
        const builder = new EnvelopeBuilder();
        expect(builder.build().isEmpty()).to.be.true;
    });
    it("test build with one coordinate", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([2.0,3.0]);
        expect(builder.build().toString()).to.equal("[2,3,2,3]");
    });
    it("test build with several coordinates", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0,1.0]);
        builder.insert([2.0,0.0]);
        builder.insert([1.0,3.0]);
        const result = builder.build();
        expect(result.isEmpty()).to.be.false;
        expect(result.toString()).to.equal("[0,0,2,3]");
    });
    it("test insert empty coordinate is ignored", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([]);
        expect(builder.build().isEmpty()).to.be.true;
        builder.insert([1.0,1.0]);
        expect(builder.build().toString()).to.equal("[1,1,1,1]");
    });
    it("test as visitor with point", () => {
        const builder = new EnvelopeBuilder();
        new Point([3.0,4.0]).accept(builder);
        expect(builder.build().toString()).to.equal("[3,4,3,4]");
    });
    it("test as visitor with empty point", () => {
        const builder = new EnvelopeBuilder();
        new Point().accept(builder);
        expect(builder.build().isEmpty()).to.be.true;
    });
    it("test as visitor with linestring", () => {
        const builder = new EnvelopeBuilder();
        new LineString([
            new Point([0.0,1.0]),
            new Point([2.0,0.0]),
            new Point([1.0,3.0])
        ]).accept(builder);
        expect(builder.build().toString()).to.equal("[0,0,2,3]");
    });
});
