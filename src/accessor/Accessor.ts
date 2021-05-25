import configurable from './configurable.decorator';

export class Accessor {
  constructor(private _x: number = _x, private _y: number = _y) {}

  @configurable(true)
  get x() {
    return this._x;
  }

  @configurable(false)
  get y() {
    return this._y;
  }
}
