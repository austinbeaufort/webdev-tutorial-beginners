// let name = prompt('what is your first name?', 'fred');
// let lastName = prompt('what is your last name?', 'jones');

// alert(name + ' ' + lastName);

// let age = 16;

// if (age < 16) {
//     alert('you cannot drive');
// } else if (age === 16) {
//     alert('you can drive finally');
// } else {
//     alert('you drive already');
// }

// function go(name, age) {
//     if (age < 20) {
//         return name + '!';
//     } else {
//         return name;
//     }
// }

// alert( go('peter', 19) );

// go('will', 30);
// go('peter', 7);

// function add(first, second) {
//     return first+second;
// }

// let sum = add(1, 2);
// alert(sum);

// alert( add(1, 2) );

// function go() {
//     alert('hi');
// }

// function can sit as a variable in an array.
// let myList = ['apples', 12, go];

// call the function from array.
// go();

// myList[2]();

// add a new item to array
// myList[3] = 'pineapples';

// change current first array item
// myList[0] = 'watermelon';

// console.log(myList[0]);
// console.log(myList[3]);
// console.log(myList);

// let myList = ['apples', 12, ['will', 'laura']];
// console.log(myList);

// let myList = ['apples', 'oranges', 'bananas'];

// pops apples off front.
// myList.shift();

// pops oranges off front and stores it in currentFruit variable.
// let currentFruit = myList.shift();

// console.log(currentFruit);

// myList.forEach(function(value, index) {
//     console.log(value + ': ' + index);
// })


// LOOPS

// let times = 0;

// while(times < 10) {
//     console.log('tried it ' + times);
//     times = times + 1;
// }

// let times = 0;

// do {
//     console.log('ran this loop ' + times + ' times');
//     times++;
// } while (times < 10);


// let myList = ['apples', 'oranges', 'bananas'];

// for (let i = 0; i < myList.length; i++) {
//     console.log( `You have ${myList[i]} in your basket!`);
// }

function add(first, second, callback) {
    console.log(first + second);
    callback();
}

add(2, 3, function() {
    console.log('done');
});
add(4, 5);