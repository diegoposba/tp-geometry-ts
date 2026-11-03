import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";
import formatNumber from "./formatNumber";

export default class WktVisitor implements GeometryVisitor {
  private buffer = "";

  visitPoint(point: Point): void {
    if (point.isEmpty()) {
      this.buffer += "POINT EMPTY";
    } else {
      this.buffer += `POINT(${this.formatPoint(point)})`;
    }
  }

  visitLineString(lineString: LineString): void {
    if (lineString.isEmpty()) {
      this.buffer += "LINESTRING EMPTY";
      return;
    }
    const points: string[] = [];
    for (let i = 0; i < lineString.getNumPoints(); i++) {
      points.push(this.formatPoint(lineString.getPointN(i)));
    }
    this.buffer += `LINESTRING(${points.join(",")})`;
  }

  getResult(): string {
    return this.buffer;
  }

  private formatPoint(point: Point): string {
    return `${formatNumber(point.x())} ${formatNumber(point.y())}`;
  }
}
