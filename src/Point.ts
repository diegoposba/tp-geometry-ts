import Coordinate from "./Coordinate";
import Geometry from "./Geometry";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";

export default class Point implements Geometry {
  private coordinate: Coordinate;

  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate || [];
  }

  getType(): string {
    return "Point";
  }

  isEmpty(): boolean {
    return this.coordinate.length === 0;
  }

  translate(dx: number, dy: number): void {
    if (this.isEmpty()) {
      return;
    }
    this.coordinate = [this.x() + dx, this.y() + dy];
  }

  clone(): Point {
    return new Point([...this.coordinate]);
  }

  accept(visitor: GeometryVisitor): void {
    visitor.visitPoint(this);
  }

  getEnvelope(): Envelope {
    const builder = new EnvelopeBuilder();
    builder.insert(this.coordinate);
    return builder.build();
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.isEmpty() ? Number.NaN : this.coordinate[0];
  }

  y(): number {
    return this.isEmpty() ? Number.NaN : this.coordinate[1];
  }
}
