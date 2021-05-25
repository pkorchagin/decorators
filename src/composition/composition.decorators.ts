const [calculated, wasCalled] = [
  'decorator factory was calculated',
  'decorator was called',
];

export function first() {
  console.log(`first(): ${calculated}`);
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log(`first(): ${wasCalled}`);
  };
}

export function second() {
  console.log(`second(): ${calculated}`);
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log(`second(): ${wasCalled}`);
  };
}

export const third = () => {
  console.log(`third(): ${calculated}`);
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log(`third(): ${wasCalled}`);
  };
};
