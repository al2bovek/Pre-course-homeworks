let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
const idMarried = JSON.parse(JSON.stringify(passportMarried));
idMarried.married = true;
console.log(passportMarried);
console.log(idMarried);