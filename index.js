const array = [
    8,
    "55",
    [
        2,
        "Hello World",
        {
            a: 2,
            b: 5,
        },
        false,
    ],
    {
        arr: [true, 1, NaN, new Array(2, 33)],
        test: null,
        obj: { d: "Moha", last: [2, false, undefined] },
    },
];


const [,,, nestedObject] = array;
const { arr, test, obj } = nestedObject;
const [boolean, one, notANumber, newArray] = arr;
const [two, thirtyThree] = newArray;
const { d, last } = obj;

console.log(thirtyThree);
console.log(d);
///////////////////////////////
const array2 = [2, 4, [22, "test"], false, null, {a: 2}, [22, "test"], "null"];
let hasDuplicates = false;

for (let i = 0; i < array2.length; i++) {
    for (let j = i + 1; j < array2.length; j++) {
        if (JSON.stringify(array2[i]) === JSON.stringify(array2[j])) {
            hasDuplicates = true;
            break;
        }
    }
    if (hasDuplicates) break;
}

console.log(hasDuplicates);