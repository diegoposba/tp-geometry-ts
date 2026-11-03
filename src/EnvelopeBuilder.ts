import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";
import type Point from "./Point";
import type LineString from "./LineString";

export default class EnvelopeBuilder implements GeometryVisitor {
  private xmin = Number.POSITIVE_INFINITY;
  private ymin = Number.POSITIVE_INFINITY;
  private xmax = Number.NEGATIVE_INFINITY;
  private ymax = Number.NEGATIVE_INFINITY;

  insert(coordinate: Coordinate): void {
    if (coordinate.length === 0) {
      return;
    }
    const [x, y] = coordinate;
    this.xmin = Math.min(this.xmin, x);
    this.ymin = Math.min(this.ymin, y);
    this.xmax = Math.max(this.xmax, x);
    this.ymax = Math.max(this.ymax, y);
  }

  visitPoint(point: Point): void {
    this.insert(point.getCoordinate());
  }

  visitLineString(lineString: LineString): void {
    for (let i = 0; i < lineString.getNumPoints(); i++) {
      this.insert(lineString.getPointN(i).getCoordinate());
    }
  }

  build(): Envelope {
    if (this.xmin > this.xmax) {
      // aucune coordonnée insérée
      return new Envelope();
    }
    return new Envelope([this.xmin, this.ymin], [this.xmax, this.ymax]);
  }
}
