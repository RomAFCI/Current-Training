let data = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
    {
        "batter":
            [
                { "id": "1001", "type": "Rick" },
                { "id": "1002", "type": "Chocolate" },
                { "id": "1003", "type": "Blueberry" },
                { "id": "1004", "type": "Devil's Food" }
            ]
    },
    "topping":
        [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5005", "type": "Morty" },
            { "id": "5007", "type": "helloWorld" },
            { "id": "5006", "type": "Chocolate with Sprinkles" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]
}

console.log(data);

console.log(data.name);
console.log(data.ppu);
console.log(data.topping);
console.log(data.batters.batter[3].type);
console.log(data.topping[6].type);
console.log(data.topping[0].id);


console.log(data.batters.batter[0].id);
console.log(data.batters.batter[0].type);

let one = data.batters.batter[0].id;
let two = data.batters.batter[0].type;
let three = ` est l'id `

total = two + three + one;

console.log(total);

console.log(two + ` est l'id ` + one );

console.log(data.topping[6].id);

let a = data.name;
let b = data.topping[6].id;

console.log(a + ` est l'id ` + b );