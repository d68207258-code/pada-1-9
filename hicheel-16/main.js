// ---------1---------
// function sayhello() {
//   return "sain uu";
// }
// console.log(sayhello());
// ----------2----------
// function double(n) {
//   return n * 2;
// }
// console.log(double(2));
// ---------3---------
// function square(n) {
//   return n * n;
// }
// console.log(square(9));
// -----------4--------
// function area(w, h) {
//   return w * h;
// }
// console.log(area(100, 20));
// ----------5---------
// function perimeter(w, h) {
//   return (w + h) * 2;
// }
// console.log(perimeter(20, 40));
// --------6------
// function greet(name, me = "!") {
//   return "sain uu, " + name + me;
// }
// console.log(greet("Dulguun"));
// ----------7--------
// function fullname(first, last) {
//   return fullname(first + last);
// }
// console.log(fullname("Dulguun", "tamir"));
// .1
// function scopetest() {
//   let secret = 42;
// }
// scopetest();
// console.log(scopetest());
// .2
// const discount = (price, percent) => (price = price - (price / 100) * percent);
// console.log(discount(100, 15));
// .3
// const discount = (price, percent) => (price = price - (price / 100) * percent);
// console.log(discount(104, 12));

// const finelPrice = (price, percent) =>
//   (price = price - (price / 100) * percent);
// console.log(finelPrice(1234, 12));
// .4
// function minofthree(a, b, c) {
//   let min = a;
//   if (b < min) min = b;
//   if (c < min) min = c;
//   return min;
// }
// console.log(minofthree(3, 5, 7));
// .5
// function middleOFThree(a, b, c) {
//   let min = a;
//   if (b > min && c < min) min = a;
//   if (a > b && c < b) min = b;
//   if (a > c && b < c) min = c;
//   return min;
// }
// .6
// console.log(middleOFTHree(9, 2, 5));
// const scores = [60, 70, 80, 90, 95];
// let sum = 0;
// let avg = 1;
// for (let i = 0; i < scores.length; i++) {
//   sum += scores[i];
// }
// avg = sum / scores.length;
// console.log(avg);
// const number = [42, 7, 88, 15, 63, 29, 991, 4, 56, 73];
// let max = number[0];
// for (const item of number) {
//   if (item > max) {
//     max = item;
//   }
// }
// console.log(max);

// const students = ["Alice", "Bob", "Charlie", "David", "Emma"];
// for (let i = 0; i < students.length; i++) {
//   console.log(i + 1, "-r oyutan", students[i]);
// }
// 1.
// function arraySum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(arraySum([1, 2, 3, 4, 5]));
