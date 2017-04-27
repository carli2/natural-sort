# natural-sort
Sort criteria function that sorts strings in a natural order i.e. treats numbers in their numeric order.

##usage
```
var naturalsort = require('natural-sort');
var strings = ['d', 'c', 'a11', 'a2'];
strings.sort(naturalsort);
console.log(strings);
// output: ['a2', 'a11', 'c', 'd']
```
