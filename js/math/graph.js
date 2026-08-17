class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }

  addPoint(point) {
    this.points.push(point);
  }

  containsPoint(point) {
    return this.points.find((p) => p.equals(point));
  }

  tryAddPoint(point) {
    if (!this.containsPoint(point)) {
      this.addPoint(point);
      return true;
    }

    return false;
  }

  addSegment(segment) {
    this.segments.push(segment);
  }

  segmentAlreadyExists(segment) {
    return this.segments.find((s) => s.equals(segment));
  }

  tryAddSegment(segment) {
    if (!this.segmentAlreadyExists(segment) && !segment.p1.equals(segment.p2)) {
      this.addSegment(segment);
      return true;
    }

    return false;
  }

  removeSegment(segment) {
    if (!segment) return;
    this.segments.splice(this.segments.indexOf(segment), 1);
  }

  removePoint(point) {
    this.points.splice(this.points.indexOf(point), 1);
    let segmentsToRemove = this.segments.filter((s) => s.includes(point));
    for (const seg of segmentsToRemove) {
      this.removeSegment(seg);
    }

    // const segs = this.getSegmentsWithPoint(point);
    // for (const seg of segs) {
    //   this.removeSegment(seg)
    // }
  }

  getSegmentsWithPoint(point) {
    const seg = [];
    for (const seg of this.segments) {
      if (seg.includes(point)) {
        segs.push(seg);
      }
    }
    return segs;
  }

  dispose() {
    this.points.length = 0;
    this.segments.length = 0;
  }

  draw(ctx) {
    for (const seg of this.segments) {
      seg.draw(ctx);
    }

    for (const pt of this.points) {
      pt.draw(ctx);
    }
  }
}
