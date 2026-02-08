var slugify=require('slugify');
let a=slugify('Some string');
console.log(a);
const b=slugify('alkvi#$ $$dn jrkjdn && 6 5 ggl','_');
console.log(b);