console.log('Hello,  World!');
console.assert(2 % 3 === 0, 2, 4);
console.clear();

function greet(user) {
    console.count();
    return `hi ${user}`;
}

greet("bob");
greet("alice");
greet();
console.count();

function greetLabel(user) {
    console.count(user);
    return `hi ${user}`;
}

greetLabel("bob");
greetLabel("alice");
greetLabel("alice");
console.count("alice");

console.countReset("bob");
console.count("alice");
