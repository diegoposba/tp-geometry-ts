import Coordinate from "./Coordinate";
import AbstractGeometry from "./AbstractGeometry";
import GeometryVisitor from "./GeometryVisitor";

export default class Point extends AbstractGeometry {
  private coordinate: Coordinate;

  constructor(coordinate?: Coordinate) {
    super();
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
