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

/* september - 9 " DOM " */

// let h5 = document.getElementsByClassName("five");
// h5[0].style.color = 'blue'

// let h1 = document.getElementById("one");
// h1.style.color = 'blue'

// let h2 = document.getElementById("two");
// h2.style.color = 'purple'

// ...existing code...

// const images = [
//   "https://images.unsplash.com/photo-1756752358819-23f00a84ee7b?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1757260019168-606a272c7d9c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1757262997522-c1a8683702a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1532771098148-525cefe10c23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   // Add your image file names or URLs here
// ];
// let current = 0;
// const imgElement = document.getElementById("slideshow");
// function showNextImage() {
//   imgElement.src = images[current];
//   current = (current + 1) % images.length;
// }
// showNextImage();
// setInterval(showNextImage, 2000);

/* september - 10 */

// let btn = document.querySelector("button");
// let bd = document.querySelector("body");
// btn.addEventListener("click", function xyz() {
//   bd.style.background = "linear-gradient(135deg, #60d7ecff, #22479eff)";
// });

// let inp = document.querySelector("input");
// inp.addEventListener("input", (e) => {
//     console.log(e.target.value);
//     document.querySelector("h2").innerText = e.target.value;
// });

/* september - 11 */

// let forM1 = document.querySelector("#forM1");
// forM1.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let data = {
//     name: forM1[0].value,
//     email: forM1[1].value,
//     pass: forM1[2].value,
//   };
//   console.log(data);
//   localStorage.setItem("user", JSON.stringify(data));
// });
// let forM2 = document.querySelector("#forM2");
// forM2.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let storeUser = JSON.parse(localStorage.getItem("user"));
//   let email = forM2[0].value;
//   let pass = forM2[1].value;
//   if (email === storeUser.email && pass === storeUser.pass) {
//     alert("login successful");
//   } else {
//     alert("login failed");
//   }
// });

// let inp = document.querySelector("input");
// let btn = document.querySelector("button");
// let Li = document.querySelector("ul");
// btn.addEventListener("click", () => {
//   let li = document.createElement("li");
//   li.innerText = inp.value;
//   Li.append(li);
//   inp.value = "";
//   li.addEventListener("click", () => {
//     li.remove();
//   })
// });

/* september - 19 */

// Example: Simulating a task with Promise
// function fetchData(success) {
//   return new Promise((resolve, reject) => {
//     console.log("Fetching data...");

//     setTimeout(() => {
//       if (success) {
//         resolve("Data fetched successfully!");
//       } else {
//         reject("Error: Failed to fetch data.");
//       }
//     }, 2000); // simulating 2 second delay
//   });
// }

// // Using the Promise
// fetchData(true) // change to false to test reject
//   .then((result) => {
//     console.log("✅ Success:", result);
//   })
//   .catch((error) => {
//     console.error("❌ Failure:", error);
//   })
//   .finally(() => {
//     console.log("Task finished.");
//   });

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.splice(2, 2, 10, 11, 12); // starting index, number of elements to delete, elements to add
// console.log(arr);
// arr.splice(4); // this will acts as slice which deletes elements from the starting index to the end

// const readlineSync = require("readline-sync");
// readlineSync.question("who are you ?")

/* Promise chaining */

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 1 done ✅"), 1000);
//   });
// }

// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 2 done ✅"), 1000);
//   });
// }

// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Step 3 done ✅"), 1000);
//   });
// }

// step1()
//   .then((msg) => {
//     console.log(msg);
//     return step2();
//   })
//   .then((msg) => {
//     console.log(msg);
//     return step3();
//   })
//   .then((msg) => {
//     console.log(msg);
//   })
//   .finally(() => console.log("All steps completed 🎉"));

/* Run multiple tasks in parallel */

// const p1 = new Promise((resolve) => setTimeout(() => resolve("Result 1"), 1000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("Result 2"), 2000));
// const p3 = new Promise((resolve) => setTimeout(() => resolve("Result 3"), 1500));

// Promise.all([p1, p2, p3])
//   .then((results) => {
//     console.log("✅ All done:", results);
//   })
//   .catch((err) => {
//     console.error("❌ One failed:", err);
//   });

/* Promise.race() → First one wins */

// const fast = new Promise((resolve) => setTimeout(() => resolve("Fast one 🏃"), 1000));
// const slow = new Promise((resolve) => setTimeout(() => resolve("Slow one 🐢"), 3000));

// Promise.race([fast, slow])
//   .then((winner) => {
//     console.log("Winner is:", winner);
//   });
