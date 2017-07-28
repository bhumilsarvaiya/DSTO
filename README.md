# Usage:

## Installation:

```bash
npm install dsto
```

## Quick Example

```javascript
var dsto = require('dsto');

var obj1 = dsto.convert('30cmx40cm m');
console.log(obj1);
//output: { data: [0.3, 0.4], format: 'm' }

var obj2 = dsto.convert('30cmx40mx50km m');
console.log(obj2);
//output: { data: [0.3, 40, 50000], format: 'm' }

var obj3 = dsto.convert('30'x40'x50' in');
console.log(obj3);
//output: { data: [ 11.811, 15.748, 19.685 ], format: 'in' }
```
# Currently supported units:

**cm:** centimeter, **m:** meter, **km:** kilometer, **ft:** feet, **in:** inch, **':** centimeter, **":** inch
