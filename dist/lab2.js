"use strict";
// Задание 1: Реализовать метод, возвращающий максимальное число из массива вещественных чисел 
function MaxNum(numbers) {
    return Math.max(...numbers);
}
const floatNumbers = [1.5, 2.3, 3.7, 0.9];
const maxResult = MaxNum(floatNumbers);
console.log("Максимальное число:", maxResult);

// Задание 2: Реализовать метод, возвращающий флаг наличия хотя бы одного отрицательного числа в матрице целых чисел
function hasNegative(matrix) {
    return matrix.some(row => row.some(value => value < 0));
}
const integerMatrix = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, 9]
];
const hasNegatives = hasNegative(integerMatrix);
console.log("Есть отрицательные числа в матрице:", hasNegatives);

// Задание 3: Создайте кортеж, который может содержать только 3 числовых значения. Реализуйте метод, возвращающий сумму этих числовых значений
function sumTuple(tuple) {
    return tuple.reduce((acc, val) => acc + val, 0);
}
const numberTuple = [1, 2, 3]; // Кортеж из 3 чисел
const sumResult = sumTuple(numberTuple);
console.log("Сумма чисел в кортеже:", sumResult);

// Задание 4: Создайте тип перечисление для типов мячей для различных видов спортивных игр. Выведите какой-либо тип мяча в консоль.
const BallType = {
    FOOTBALL: "Футбольный мяч",
    BASKETBALL: "Баскетбольный мяч",
    TENNIS: "Теннисный мяч"
};
console.log("Тип мяча:", BallType.FOOTBALL);

// Задание 5: Вставьте следующий код в ваш проект
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super();
        this.name = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super();
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function SelectCatDog(pet) {
    console.log("Имя:", pet.name);
    console.log("Возраст:", pet.age);
    console.log("Звук:", pet.speak());
}
const petcat = new Cat();
const petdog = new Dog();
SelectCatDog(petcat);
console.log("-----");
SelectCatDog(petdog);

// Задание 6: Создайте тип с применением перечисления из 3го задания
const MyAmino = {
    type: BallType.FOOTBALL,
    price: 20,
    volume: 2
};
console.log(JSON.stringify(MyAmino, null, 2));