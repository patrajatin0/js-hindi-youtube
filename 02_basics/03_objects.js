// singleton 
// object.create


// object literals


const mysym = Symbol("mykey1")
const jsUser = {
    name: "Hitesh",
    "full name" : "Hitesh Choudhary",
    [mysym]: "mykey1",
    age: 18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn :false,
    lastLoginDays : ["Monday","Saturday"]

}

// console.log(jsUser);

// console.log(jsUser["age"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);

jsUser.age = 32

// console.log(Object.freeze(jsUser))
jsUser.age = 18


jsUser.greeting = function () {
    console.log("hello js user")
}
jsUser.greetingTwo = function () {
    console.log(`hello js user ${this.name}`)
}

console.log(jsUser.greeting());

console.log(jsUser.greetingTwo());
