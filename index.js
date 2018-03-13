import minWidth from './minWidth';
import maxWidth from './maxWidth';
import numberParser from 'number-parsing';

export default (min, max) => {
  return `calc(${min}px + (${max} - ${min}) * ((100vw - ${minWidth}) / (${numberParser(maxWidth)} - ${numberParser(minWidth)})))`;
};
