import { validate } from './validate.decorator';
import { required } from './required.decorator';

export class Parameter {
  constructor(private message: string = message) {}

  @validate()
  greet(@required name: string = '') {
    console.log('Bonjour ' + name + ', ' + this.message);
  }
}
