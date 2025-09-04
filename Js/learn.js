/* september - 3 */

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// }

// console.log(window); // window is a Global object

// a = 5;
// console.log(a);

// a = 5;
// console.log(this.a);

// console.log(window);

// a = 5;
// let obj = {
//   a: 10,
//   sum: () => {
//     console.log(this.a);
//   },
// };
// obj.sum();

// let arr = [1, 2, 3];
// arr.map((a, b, c) => {
//   console.log(b);
// });

/* september - 4 */

// let arr = [1, 2, 3, 4, 5, 6, 7];
// Array.prototype.myFilter = function (cb) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(this[i], i, this)) {
//       res.push(this[i]);
//     }
//   }
//   return res;
// };
// let data = arr.myFilter((a, b, c) => {
//   return a % 2 == 0;
// });
// console.log(data);

// Callback Hell 🌋
// function step1(fn) {
//   setTimeout(() => {
//     console.log("Please select a photo");
//     fn();
//   }, 5000);
// }
// function step2(fn) {
//   setTimeout(() => {
//     console.log("Caption");
//     fn();
//   }, 3000);
// }
// function step3(fn) {
//   setTimeout(() => {
//     console.log("Apply filter");
//     fn();
//   }, 2000);
// }
// function step4(fn) {
//   setTimeout(() => {
//     console.log("Post");
//   }, 1000);
// }
// step1(() => {
//   step2(() => {
//     step3(() => {
//       step4();
//     });
//   });
// });
