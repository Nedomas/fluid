'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _minWidth=require('./lib/minWidth'),_minWidth2=_interopRequireDefault(_minWidth),_maxWidth=require('./lib/maxWidth'),_maxWidth2=_interopRequireDefault(_maxWidth),_numberParsing=require('number-parsing'),_numberParsing2=_interopRequireDefault(_numberParsing);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}exports.default=function(a,b){return'calc(\n    '+a+'px +\n    ('+b+' - '+a+') *\n    (\n      (100vw - '+_minWidth2.default+') /\n      ('+(0,_numberParsing2.default)(_maxWidth2.default)+' - '+(0,_numberParsing2.default)(_minWidth2.default)+')\n    )\n  )'};