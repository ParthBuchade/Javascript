arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9];
new_arr = arr1.concat(arr2);
console.log(new_arr);
console.log(typeof new_arr); //it's type is "object"
console.log(new_arr.length);

// if we use + operator then it converts into "string"
arr3 = arr1 + arr2;
console.log(arr3);
console.log(arr3.length);
console.log(typeof arr3);