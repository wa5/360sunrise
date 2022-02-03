//generics
function getRandomNum<T>(items: T[]): T {
    let num: number = Math.floor(Math.random() * items.length);
    return items[num];
}
let items = [3,7,8,9];

console.log(getRandomNum(items));

// let input = document.querySelector('input["type="text"]') as HTMLInputElement;
// console.log(input.value);

// var fun1=(a,b,c,d?):void=>{}
// fun1(3,4,7)
// //default parameters
// var fun2=(a,b,c=4):void=>{}
// fun2(2,3)

//interfaces
// interface Person{
// fname:string,
// lastname:string
// }

// function getFullnname(person: Person): string {
//     return person.fname + person.lastname;
// }

//union data types
// let result:number|string;
// result=10
// result = "ghghgh"

// enum Week {
//     Monday,
//     tusay,
//     wednesday,
//     thirday,
//     fri,
//     sat,
//     sun
// }

// const days: Week = Week.Monday;
// console.log(days);
// function isDAYS(week: Week): string {
//     switch (week) {
//         case Week.Monday:
//         case Week.tusay:
//         case Week.wednesday:
//     }
//     return;
// }
