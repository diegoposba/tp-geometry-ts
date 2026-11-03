import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";
import formatNumber from "./formatNumber";

export default class WktWriter {
  write(geometry: Geometry): string {
    if (geometry instanceof Point) {
      if (geometry.isEmpty()) {
        return "POINT EMPTY";
      }
      return `POINT(${this.formatPoint(geometry)})`;
    } else if (geometry instanceof LineString) {
      if (geometry.isEmpty()) {
        return "LINESTRING EMPTY";
      }
      const points: string[] = [];
      for (let i = 0; i < geometry.getNumPoints(); i++) {
        points.push(this.formatPoint(geometry.getPointN(i)));
      }
      return `LINESTRING(${points.join(",")})`;
    } else {
      throw new TypeError("geometry type not supported");
    }
  }

  private formatPoint(point: Point): string {
    return `${formatNumber(point.x())} ${formatNumber(point.y())}`;
  }
}
