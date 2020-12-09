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

// Promise real world example
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error"));
