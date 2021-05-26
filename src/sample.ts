interface ISampleTypes {
  [key: string]: () => Promise<void>;
  COMPOSITION: () => Promise<void>;
  CLASS: () => Promise<void>;
  METHOD: () => Promise<void>;
  PARAMETER: () => Promise<void>;
  ACCESSOR: () => Promise<void>;
  PROPERTY: () => Promise<void>;
  METADATA: () => Promise<void>;
}

const sampleTypes = {
  COMPOSITION: async (): Promise<void> => {
    const { Composition } = await import('./composition/Composition');
    new Composition().example();
  },

  CLASS: async (): Promise<void> => {
    const { Class } = await import('./class/Class');
    console.log(new Class('Class decorator').greet());
  },

  METHOD: async (): Promise<void> => {
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
  },

  PARAMETER: async (): Promise<void> => {
    const { Parameter } = await import('./parameter/Parameter');
    const method = new Parameter('do validate you parameter');
    console.log('\x1b[36m', 'right case..', '\x1b[0m');
    method.greet('Parameter decorator');
    console.log('\x1b[41m\x1b[30m', 'error case..', '\x1b[0m');
    method.greet(); // Error: Required arguments are missing.
  },

  ACCESSOR: async (): Promise<void> => {
    const { Accessor } = await import('./accessor/Accessor');
    console.log(
      'x is a configurable',
      Object.getOwnPropertyDescriptor(Accessor.prototype, 'x')?.configurable,
    );
    console.log(
      'y is a configurable',
      Object.getOwnPropertyDescriptor(Accessor.prototype, 'y')?.configurable,
    );
  },

  PROPERTY: async (): Promise<void> => {
    const { Property } = await import('./property/Property');
    new Property('Property decorator').greet();
  },

  METADATA: async (): Promise<void> => {
    const { Line } = await import('./metadata/Line');
    const { Point } = await import('./metadata/Point');
    const line = new Line();
    line.start = new Point(0, 0);
  },
};

export { ISampleTypes, sampleTypes };
