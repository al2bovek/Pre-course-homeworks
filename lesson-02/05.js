 let passport = {
    name: "Petr",
    surname: "Petrov",
};
const id = Object.assign({}, passport);
id.name = 'Ivan';
console.log(passport);
console.log(id);