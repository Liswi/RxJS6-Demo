const { Observable, interval } = require('rxjs');
const { map, filter, take } = require('rxjs/operators');

const ob = interval(1000);
ob.pipe(
    take(3),
    map(n => n * 2),
    // filter(n => n > 2)
).subscribe(data => console.log(data));
console.log(1, 22)
console.log(ob);
