console.log("Hello World");

// Callbacks - Once something done do this

// Promise
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff Worked");
  } else {
    reject("Error, it broke");
  }
});

// calling promise
//promise.then((result) => console.log(result));

promise
  .then((result) => result + "!")
  .then((result2) => {
    console.log(result2);
  })
  .catch(() => console.log("Error"));
