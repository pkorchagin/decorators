import formatMetadataKey from './key.meta';

export default function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
