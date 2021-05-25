import 'reflect-metadata';
import { Point } from './Point';
import validate from './validate.decorator';

export class Line {
  // @ts-ignore
  private _start: Point;
  // @ts-ignore
  private _end: Point;

  @validate
  set start(value: Point) {
    this._start = value;
  }

  get start() {
    return this._start;
  }

  @validate
  set end(value: Point) {
    this._end = value;
  }

  get end() {
    return this._end;
  }
}
