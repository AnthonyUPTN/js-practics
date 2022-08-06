// 1. Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: `‘a’` и `‘A’` разные символы.

// **Input**: String
// **Output**: Boolean

// 1й вариант

// function isUnique(string) {
// 	for (let i = 0; i < string.length; i += 1){
// 		if(string.indexOf(string[i]) !== i){
// 			return false
// 		}
// 	}
// 	return true
// }

// 2й вариант

// function isUnique(string) {
//  return new Set(string).size === string.length;
// }

// console.log(isUnique('abcdef')) // -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) // -> true
// console.log(isUnique('abcadef')) // -> false

// ====================================================

// 2. Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В результате должны получить новый одномерный массив.

// **Input**: Array
// **Output**: Array

// function flatten(array) {
//   let result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     if (Array.isArray(array[i])) {
//       const extraFlat = flatten(array[i]);
//       for (let j = 0; j < extraFlat.length; j++) {
//         result.push(extraFlat[j]);
//       }
//     } else {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

// console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]

// ====================================================

// 3. Жодних розмов. Жодних пояснень. Тільки ТЗ та результат, який має бути. Подивіться, що має вийти на виході і напишіть цю функцію.

// Приклад коду:
// spacey(['kevin', 'has','no','space']) => [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
// spacey(['this','cheese','has','no','holes']) => ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']

// const spacey = (arr) => {
//  let result = [arr[0]];
//  for ( let i = 1; i < arr.length; i+=1) {
// 	result.push(result[i - 1] + arr[i])
// }
// return result;
// }

// console.log(spacey(['kevin', 'has','no','space']));

// ====================================================

// 4. Враховуючи математичне рівняння, яке має *,+,-,/, переверніть його так, як зазначено у прикладі

// Приклади коду:
//    solve("100*b/y") => "y/b*100"
//    solve("a+b-c/d*30") => "30*d/c-b+a"
//    solve("a*b/c+50") => "50+c/b*a"

// вариант 1

// function solve(args){

//     const arr = [...args]
//     let numbers = [];
    
//     arr.forEach((el) => {
//         if(!isNaN(el)){
//             numbers.push(el)
//         }
//     })

//     if(arr.includes(numbers[0])){
//         arr.splice(arr.indexOf(numbers[0]), numbers.length, numbers.join(''))
//     }

//     return arr.reverse().join('')
// }

// вариант 2

// function solve(string) {
    
//     const arr = string.split("");
//     const arr1 = [];
//     const arr2 = [];
  
//     arr.forEach((el) => {
//       if (!isNaN(el)) {
//         arr1.push(el);
//         arr2.push(arr1.join(""));
//       } else {
//         arr2.push(el);
//       }
//     });
  
//     const numbers = arr1.join("");
//     const result = [];

//     arr2.forEach((el) => {
//       if (isNaN(el)) {
//         result.push(el);
//       } else if (el === numbers) {
//         result.push(el);
//       }
//     });

//     return result.reverse().join("");
//   }
  
//    console.log(solve("100*b/y"));
//    console.log(solve("a+b-c/d*30"));
//    console.log(solve("a*b/c+50"));

// ====================================================

// 5. Необхідно реалізувати функцію, яка на вході приймає масив з різними типами даних = = gt; ['a', 1, 2, false, 'b'], а повертає об'єкт, у якому ці типи даних розсортовані за ключами.

// Приклад коду:
// {
//    number: [1, 2],
//    string: ['a', 'b'],
//    boolean: [false]
// }

// const  sorted = (arr) => {
//   let obj = {
// 	boolean: [],
// 	number: [],
// 	string: []
//   };

//   arr.forEach((el) => {
//     switch (el) {
//       case Boolean(el):
// 		obj.boolean.push(el);
//         break;
//       case Number(el):
// 		obj.number.push(el);
//         break;
//       case String(el):
// 		obj.string.push(el);
//         break;
//     }
//   });

//   return obj
// }

// console.log(sorted(["a", 1, 2, false, "b"]));

// ====================================================

// 6. Даний масив з числами, в ньому необхідно знайти і помістити в масив індекси двох чисел, сума яких дорівнюватиме заданому числу N. Якщо таких чисел немає, то повернути порожній масив.

// Приклади коду:
//    example([2, 7, 11, 15], 9) => [0, 1]
//    example([12, 24, 34, 2], 14) => [0, 3]
//    example([2, 7, 11, 15], 22) => [1, 3]

// const example = (arr, num) => {
//   const firstNumber = arr[0];
//   let result = [];

//   for (let i = 1; i < arr.length; i += 1) {
//     if (firstNumber + arr[i] === num) {
//       result.push(arr.indexOf(firstNumber));
//       result.push(i);
//     }
//   }

//   return result;
// };

// console.log(example([2, 7, 11, 15], 9));
// console.log(example([12, 24, 34, 2], 14));
// console.log(example([2, 7, 11, 15], 22));

// ====================================================

// 7. Створіть функцію, яка перевіряє пароль (переданий у вигляді рядка), щоб переконатися, що він відповідає наступним вимогам:
// 1. Від 8 до 20 символів.
// 2. Містить лише такі символи (і хоча б по одному з кожної категорії): великі літери, малі літери, цифри, спеціальні символи з !@#$%^&*?.

// Приклади коду:
//    check_password("") => "not valid"
//    check_password("password") =>"not valid"
//    check_password("P1@p") => "not valid"
//    check_password("P1@pP1@p") => "valid"
//    check_password("P1@pP1@pP1@pP1@pP1@pP1@p") => "not valid"
//    check_password("Paaaaaa222!!!") => "valid"
