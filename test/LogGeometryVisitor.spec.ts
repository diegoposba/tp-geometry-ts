import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";

describe("test LogGeometryVisitor", () => {
    let logSpy: ReturnType<typeof vi.spyOn>;

    // remplace console.log pour capturer les messages
    beforeEach(() => {
        logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    });
    afterEach(() => {
        logSpy.mockRestore();
    });

    const visitor = new LogGeometryVisitor();

    it("test empty point", () => {
        new Point().accept(visitor);
        expect(logSpy).toHaveBeenCalledWith("Je suis un point vide.");
    });
    it("test point", () => {
        new Point([2.0,3.0]).accept(visitor);
        expect(logSpy).toHaveBeenCalledWith("Je suis un point avec x=2.0 et y=3.0.");
    });
    it("test empty linestring", () => {
        new LineString().accept(visitor);
        expect(logSpy).toHaveBeenCalledWith("Je suis une polyligne vide.");
    });
    it("test linestring", () => {
        const l = new LineString([
            new Point([0.0,0.0]),
            new Point([1.0,1.0]),
            new Point([5.0,5.0])
        ]);
        l.accept(visitor);
        expect(logSpy).toHaveBeenCalledWith("Je suis une polyligne définie par 3 point(s).");
    });
});
