/* การประกาศตัวแปรเบื้องต้น
console.log('hello world');
console.log('Hello Worlddddd');
prompt('What is your name?');

// String, Number, Boolean, Object, Array
// String
let firstname = 'John';
const idcard = '1234';
// Number
let age = 25;
let height = 5.9;

// Boolean
let isMarried = false;

console.log('My name is', firstname, 'and I am', age, 'years old.');
*/


 /*
 let number1 = 5;
 let number2 = 10;

 let result = number1 % number2;
 console.log(result);

 let number3 = '4';
 let number4 = '8';

 let result2 = number3 + number4;
 console.log('New number is',result2); //48

 // == เท่ากับ
 // != ไม่เท่ากับ

 let number5 = 5;
 let number6 = 3;

 let codition1 = number5 != number6; // Boolean(true/false)
 console.log('result of codition is',codition1);
 */


 /* การใช้ if-else เบื้องต้น
let number1 = 5;
let number2 = 10;
// if - else condition
if (number1 != number2) {
    console.log('this is if');
} else if (number1 == number2) {
    console.log('this is else if');
} else {
    console.log('this is else');
}
 */



/* เขียนคำนวนเกรด ด้วย if-else(Javascript)
let score = prompt('Enter your score: ');
console.log('Your score is',score);
// if - else condition
if (score >= 80) {
    console.log('you are grade A');
} else if (score >= 70) {
    console.log('you are grade B');
} else if (score >= 60) {
    console.log('you are grade c');
} else if (score >= 50) {
    console.log('you are grade D');
} else {
    console.log('you are grade F');
}
*/



/*
&& เเละ
|| หรือ
! not หรือไม่
*/

/*  && || ! condition
let number1 = 5;
let number2 = 8;
// true && false = false
// true || false = true
let condition = number1 >= 3 || number2 >=10;
console.log('result of condition is', condition); //true

let age = 30;
let gender = 'male';
// true && true = true
if (age >= 20 && gender == 'male') {
    console.log('you are male adult');
}
*/

/*
let number = 25;

if (!(number % 2 == 0)) {
    console.log('you are odd number');
}

console.log('While loop');
let counter = 0;
while (counter < 10) { //true
    console.log('While loop');  
    counter++ // counter = counter + 1; , counter += 1; 
}

for (let counter = 0; counter <= 10; counter++) {
    console.log('For loop');
}
*/


/* Array เเละการใช้งาน Array

let ages = [30, 35, 40, 45];
console.log('new-age', ages[2]);
console.log('age-list', ages);

// 1.เเทนที่ค่าใน Array
ages = [50,55];
console.log('new-age', ages);

// 2.การต่อ Array
ages.push(60);
console.log('new-age', ages);

// 3.การลบ Array
ages.pop()
console.log('new-age', ages);
*/

/*
let ages = [30, 35, 45, 50];

if (!ages.includes(40)) {
    console.log('you have to be 40');
}
*/

/* Array การใช้งาน Array (2)
let ages = [90, 60, 40, 45, 50];
console.log(ages);
ages.sort();
console.log(ages);

let names_list = ['John', 'Boo', 'Alice', 'Marry'];
names_list.push('Mike');
console.log(names_list.length);
console.log(names_list[0]);
console.log(names_list[1]);
console.log(names_list[2]);

for (let index = 0; index < names_list.length; index++) {
    console.log('names list', names_list[index]);
}
*/

/* Object การใช้งาน Object
let student = [{
    name: 'winston',
    age: 100,
    grade: '100'
}, {
    name: 'anby',
    age: 90,
    grade: '90'
}];
//console.log('name',student.name);
//console.log('age',student.age);

student.push ({
    name: 'billy',
    age: 80,
    grade: '80'
});

student.pop ()

for (let index = 0; index < student.length; index++) {
    console.log('Student number', (index+1));
    console.log('name', student[index].name);
    console.log('age', student[index].age);
    console.log('grade', student[index].grade);
}
*/


/* Function การเขียน function (1)
let scores1 = 70;
let scores2 = 45;
let grades = ''

//ประกาศ function ชื่อ calculateGrade ที่มี parameter ชื่อ scores

function calculateGrade(scores) {
    if (scores >= 80) {
        grades = 'A';
    } else if (scores >= 70) {
        grades = 'B';
    } else if (scores >= 60) {
        grades = 'C';
    } else if (scores >= 50) {
        grades = 'D';
    } else {
        grades = 'F';
    }
    return grades;
}

/*
// arrow function
let calculateGrade = (scores) => {
    if (scores >= 80) {
        grades = 'A';
    } else if (scores >= 70) {
        grades = 'B';
    } else if (scores >= 60) {
        grades = 'C';
    } else if (scores >= 50) {
        grades = 'D';
    } else {
        grades = 'F';
    }
    return grades;
}

let student1 = calculateGrade(scores1);
let student2 = calculateGrade(scores2);
console.log('grade:', student1, student2);
*/


/* Function การเขียน function (2)
let scores = [10 , 20 , 30 , 40 , 50];
for (let index = 0; index < scores.length; index++) {
    console.log(scores[index]);
}

//score[0] = score[0] * 2;
//score[1] = score[1] * 2;
//score[2] = score[2] * 2;
//score[3] = score[3] * 2;
//score[4] = score[4] * 2;

scores = scores.map((s) => {  //map คือการเเปลี่ยนค่าใน Array
    return s * 2;
})
scores.forEach((s) => {     //forEach คือการวนลูป Array ไม่เปลี่ยนค่าใน Array
    console.log('score:', s);
})
*/

/* Filter การใช้งาน Filter(Array)
let scores = [10, 20, 30, 40];
//let newScores =[]

for (let index = 0; index < scores.length; index++) {
    console.log('Score',scores[index]);
    //if ( scores[index] >= 30) {
        //newScores.push(scores[index]);
    //}
}

let newScores = scores.filter((s) => { //filter คือการกรองค่าใน Array
    return s >= 30;
});

newScores.forEach((ns) => {
    console.log('New Score',ns);
})
*/

/* Find การใช้งาน Find(Array)
let students = [
    {
        name: "John",
        score: 80,
        grade: 'A'
    },
    {
        name: "Bob",
        score: 75,
        grade: 'B'
    },
    {
        name: "Jim",
        score: 60,
        grade: 'C'
    }
]
let student = students.find((s) => {
    if (s.name == 'Bob') {
        return s;
    }
})

let doublescores_student = students.map((s) => {
   s.score = s.score * 2
   return s
})

let highscores_student = students.filter((s) => {
    if (s.score > 80) {
        return true;
    }
})
console.log('student:', student);
console.log('highscores_student:',highscores_student);
*/