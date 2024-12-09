//Задание 1
function MaxNegNum(numbers:number []): number{
    let chek = 0;
    for(let i = 0;i<numbers.length;i++){
        if (numbers[i]<chek)
        {
            chek=numbers[i];
        }
    }
    return chek;
}
const numbers = [-1,-5,-4]
const res = MaxNegNum(numbers);
console.log(res);
//Задание 2.1
function MatrixBool(matrix:boolean [][]): number[][]{
    return matrix.map(row=>row.map(value=>value?1:0));
}
const booleanmatrix:boolean[][]=[
    [false,true,false],
    [false,false,false],
    [true,true,true]
]
const result = MatrixBool(booleanmatrix);
console.log(result);

//Задание 2.2
type MyTuple = [number,string, string]; 
 
function formatTuple(tuple: MyTuple): string { 
    const [num, str0, str1] = tuple; 
    return `${str0} : ${str1}`; 
} 
 
const myTuple: MyTuple = [52, "Первое значение", "Второе значение"]; 
const formattedString = formatTuple(myTuple); 
console.log(formattedString);
//Задание 2.3 
enum Aminoacid{
    glciin = "Глицин", glytam ="Глутамин"
}
const select : Aminoacid=Aminoacid.glciin;
console.log(select);
//Задание 2.4
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    name = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
    return "Miyau!";
    }
}
function SelectCatDog<T extends Pet>(pet:T):void{
    console.log(pet.name);
    console.log(pet.age);
    console.log(pet.speak());
    
}
const petcat = new Cat();
const petdog = new Dog();
SelectCatDog(petcat);
console.log("-----");
SelectCatDog(petdog);


type Amino = {
    type : Aminoacid
    price: number
    volume: number
}
const MyAmino: Amino={
    type: Aminoacid.glciin,
    price : 20,
    volume: 2
}
console.log(JSON.stringify(MyAmino,null,2));
