(async () => {
  switch (process.env.SAMPLE) {
    case 'COMPOSITION': {
      const { Composition } = await import('./composition/Composition');
      new Composition().example();
      break;
    }
    case 'CLASS': {
      const { Class } = await import('./class/Class');
      console.log(new Class('Class decorator').greet());
      break;
    }
    case 'METHOD': {
      const { Method } = await import('./method/Method');
      const method = new Method('Method decorator');
      method.greet();
      console.log(
        'Method.prototype.propertyIsEnumerable("greet")',
        Method.prototype.propertyIsEnumerable('greet'),
      );
      console.log(
        'Method.prototype.propertyIsEnumerable("goodbye")',
        Method.prototype.propertyIsEnumerable('goodbye'),
      );
      method.goodbye();
      break;
    }
    case 'PARAMETER': {
      const { Parameter } = await import('./parameter/Parameter');
      const method = new Parameter('do validate you parameter');
      console.log('\x1b[36m', 'right case..', '\x1b[0m');
      method.greet('Parameter decorator');
      console.log('\x1b[41m\x1b[30m', 'error case..', '\x1b[0m');
      method.greet(); // Error: Required arguments are missing.
      break;
    }
    case 'ACCESSOR': {
      const { Accessor } = await import('./accessor/Accessor');
      console.log(
        'x is a configurable',
        Object.getOwnPropertyDescriptor(Accessor.prototype, 'x')?.configurable,
      );
      console.log(
        'y is a configurable',
        Object.getOwnPropertyDescriptor(Accessor.prototype, 'y')?.configurable,
      );
      break;
    }
    case 'PROPERTY': {
      const { Property } = await import('./property/Property');
      new Property('Property decorator').greet();
      break;
    }
    case 'METADATA': {
      const { Line } = await import('./metadata/Line');
      const { Point } = await import('./metadata/Point');
      const line = new Line();
      line.start = new Point(0, 0);
      break;
    }
    default: {
      console.warn('SAMPLE environment variable not define');
    }
  }
})();
