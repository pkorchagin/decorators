import enumerable from './method.decorator';

export class Method {
  constructor(private name: string = name) {}

  @enumerable(true)
  greet() {
    console.log('Hello, ' + this.name);
  }

  // не говорите мне прощай
  @enumerable(false)
  goodbye() {
    console.log('Bey, ' + this.name);
  }
}
