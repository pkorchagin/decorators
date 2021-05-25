import requiredMetadataKey from './key.meta';

export function validate() {
  return function (
    target: any,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<any>,
  ) {
    const method = descriptor.value;
    descriptor.value = function () {
      const requiredParameters: number[] = Reflect.getOwnMetadata(
        requiredMetadataKey,
        target,
        propertyName,
      );
      if (requiredParameters) {
        for (const parameterIndex of requiredParameters) {
          if (
            parameterIndex >= arguments.length ||
            arguments[parameterIndex] === undefined
          ) {
            throw new Error('Required arguments are missing.');
          }
        }
      }
      return method?.apply(this, arguments);
    };
  };
}
