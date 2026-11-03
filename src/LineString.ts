import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry {
  private points: Array<Point>;

  constructor(points?: Array<Point>) {
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

  getNumPoints(): number {
    return this.points.length;
  }

  getPointN(n: number): Point {
    return this.points[n];
  }
}
