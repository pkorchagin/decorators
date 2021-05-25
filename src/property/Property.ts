import format from './property.decorator';
import formatMetadataKey from './key.meta';

export class Property {
  @format('Hello, %s')
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    const formatString = this.getFormat(this, 'greeting');
    console.log(formatString.replace('%s', this.greeting));
  }

  getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
  }
}
