
//Method 1
const names = require('./names');
console.log(names);
//Method 2
const {name1,name2} = require('./names');
//Calling function
const naming = require('./util');
naming("Sonu Nigam");

//Method 1
naming(names.name1);
naming(names.name2);
//Method 2
naming(name1);
naming(name2);


//moreexportways
const data  = require('./moreexportways')
console.log(data);
