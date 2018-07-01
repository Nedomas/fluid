import minWidth from './lib/minWidth';
import maxWidth from './lib/maxWidth';
import numberParser from 'number-parsing';

export default (min, max) => {
  return `calc(${min}px + (${max} - ${min}) * ((100vw - ${minWidth}) / (${numberParser(maxWidth)} - ${numberParser(minWidth)})))`;
};
