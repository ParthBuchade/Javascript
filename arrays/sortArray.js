arr1 = [5, 7, 8, 46, 9, 2];
arr1.sort(); // it sort the lexographically
console.log(arr1);
// if we want to sort the array number wise then we have to 
//provide logic in sort function
arr2 = [5, 7, 8, 46, 9, 2];
arr2.sort((a, b) => a - b);
console.log(arr2);