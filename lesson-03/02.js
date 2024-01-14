const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
let findResult, find = "апельсин";
words.indexOf(find) >= 0 ? findResult = 'Ура! нашел' : findResult = 'Придется поискать в другом магазине…';
console.log(findResult);