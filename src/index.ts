import { ISampleTypes, sampleTypes } from './sample';

const sampleInput: string = process.env?.SAMPLE || '';

(async (types: ISampleTypes, sample: keyof ISampleTypes) => {
  const handler = types[sample];

  if (handler) {
    await handler();
    return;
  }

  console.warn('SAMPLE environment variable not define');
})(sampleTypes, sampleInput);
