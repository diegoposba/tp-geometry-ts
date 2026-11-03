import Geometry from "./Geometry";
import Point from "./Point";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";

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

  getEnvelope(): Envelope {
    const builder = new EnvelopeBuilder();
    for (const point of this.points) {
      builder.insert(point.getCoordinate());
    }
    return builder.build();
  }

  getNumPoints(): number {
    return this.points.length;
  }

  getPointN(n: number): Point {
    return this.points[n];
  }
}
