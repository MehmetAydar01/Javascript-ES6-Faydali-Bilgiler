let sayi1 = 10;
sayi1 = "Engin Demirog"
let student = {
    id: 1,
    name: "Mehmet"
}
// console.log(student)

function savess(puan=10, ogrenci) {
    console.log(ogrenci.name + " " + puan + " id: " + ogrenci.id)
}

// savess(undefined, student)


let students = ["Engin Demirog", "Halit Kalayci", "Engin Toprak", "Busra"];

// console.log(students)

let students2 = [student, {id:2, name:"Halit"}, "Ankara", {city: "Istanbul"}]

// console.log(students2)

//rest
//params
//varArgs
let showProducts = function (id, ...products) {
    // ... --> rest. Boş bir dizi oluşturur.
    console.log(id)
    console.log(products[0])
}

// console.log(typeof showProducts);
// showProducts(10, ["Elma", "Armut", "Karpuz"]);

// SPREAD
let points = [1,2,3,4,50,4,60,14]
// console.log(points)
console.log(...points) // points dizisi yayıldı/ayrıştı.
console.log(Math.max(...points))


console.log("ABC", "D", "EFG", "H")
console.log(..."ABC", "D", ..."EFG", "H")
// ... --> spread operatörü


/* let aaa = [...points] // kopyalandı dizi.
console.log("aaa: ", aaa)
console.log(...aaa)
console.log(Math.max(...aaa)) */



// Destructuring
let populations = [10000, 20000, 30000, [40000, 100000]]
let [small, medium, high, [veryHigh, maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1, medium1, ...restt],numberr) {
    console.log("small1:", small1)
    console.log("medium1:", medium1)
    console.log("restt", restt)
}

someFunction(populations)

let category = {
    firstId:1,
    firstName: "Icecek"
}
console.log(category.firstId)
console.log(category["firstName"])

let {firstId, firstName} = category
console.log(firstId)
console.log(firstName)





