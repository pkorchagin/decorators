import { first, second, third } from './composition.decorators';

export class Composition {
  constructor() {
    console.log('Composition instance created');
  }

  @first()
  @second()
  @third()
  public example() {}
}
