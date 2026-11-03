import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
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

  build(): Envelope {
    if (this.xmin > this.xmax) {
      // aucune coordonnée insérée
      return new Envelope();
    }
    return new Envelope([this.xmin, this.ymin], [this.xmax, this.ymax]);
  }
}
