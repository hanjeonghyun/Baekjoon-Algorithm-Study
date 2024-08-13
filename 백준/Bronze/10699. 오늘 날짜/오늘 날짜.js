let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

month = month.toString().padStart(2, '0');
day = day.toString().padStart(2, '0');

console.log(`${year}-${month}-${day}`)