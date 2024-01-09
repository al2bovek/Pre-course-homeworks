let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
const idWithAddress = JSON.parse(JSON.stringify(passportWithAddress));
idWithAddress.address.city = 'Bobryisk';
console.log(passportWithAddress.address.city);
console.log(idWithAddress.address.city);