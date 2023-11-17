const arr = ['a', 'b', 'c'];

arr[10] = '3456';

const arrObj = {
    a: 'a',
    1: 'b',
    2: 'c',
    abc: {
        def: {
            df: [{}, {}]
        }
    }
};
const b = 'b';
//arrObj.b = '1234';
arrObj[b] = '1234';

console.log(arr);
console.log(arrObj['b']);
console.log(arrObj.b);
console.log(arrObj);
console.log(b);
//const obj = { a: 1, b: 2 };
const objMain = {
    'Anna': 500,
    'Alice': 800
};

objMain['alo'] = 123;

console.log(objMain);