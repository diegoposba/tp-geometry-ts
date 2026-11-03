import AbstractGeometry from "./AbstractGeometry";
import Point from "./Point";
import GeometryVisitor from "./GeometryVisitor";

export default class LineString extends AbstractGeometry {
  private points: Array<Point>;

  constructor(points?: Array<Point>) {
    super();
    this.points = points || [];
  }

  getType(): string {
    return "LineString";
  }

  isEmpty(): boolean {
    return this.points.length === 0;
  }

  translate(dx: number, dy: number): void {
    for (const point of this.points) {
      point.translate(dx, dy);
    }
  }

  clone(): LineString {
    return new LineString(this.points.map((point) => point.clone()));
  }

  accept(visitor: GeometryVisitor): void {
    visitor.visitLineString(this);
  }

  getNumPoints(): number {
    return this.points.length;
  }

  getPointN(n: number): Point {
    return this.points[n];
  }
}
