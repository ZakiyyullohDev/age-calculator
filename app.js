const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const userAge = document.getElementById('age');
const submitBtn = document.getElementById('submitBtn');
const error = document.getElementById('error');
const calculatedAge = document.getElementById('calculatedAge');
const currentTime = new Date();
const currentYear = currentTime.getFullYear();

const calculatingAge = () => {
    const userAgeValue = Number(userAge.value);
    
    if (firstName.value === '' || lastName.value === '') {
        // alert('Iltimos Ismingizni Kiriting!');
        error.classList.add('error')
        error.textContent = 'Iltimos Ismingizni Kiriting!'
        setTimeout(() => {
        error.textContent = ''
        error.classList.remove('error')
        }, 3000);
        return;
    }

    if (isNaN(userAgeValue) || userAgeValue <= 0) {
        // Foydalanuvchi yoshini noto'g'ri kiritgan
        alert("Iltimos, yoshingizni to'g'ri kiriting .");
        calculatedAge.textContent = '';
        return;
    }

    const editingAge = currentYear - userAgeValue;
    calculatedAge.textContent = `Hurmatli ${lastName.value} ${firstName.value}, siz ${editingAge}-yilsiz.`;
    
    setTimeout(() => {
        calculatedAge.textContent = '';
    }, 3000);
}


submitBtn.addEventListener("click", () => {
    calculatingAge()
    
});

document.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        calculatingAge()
    }
})

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// }

// // const another = Object.assign({
// //     color: 'yellow',
// //     secondColor: 'orange'
// // }, circle)

// const another = {...circle}

// console.log(another);


// const numbers = [1,2,3,-1];
// let sum0 = 0;
// for (let n of numbers) {
//     sum0 += n
// }
// console.log(sum0);

// const sum = numbers.reduce((accumulator, currentValue)=>{
//         return accumulator + currentValue
//     }, 0)
//     console.log(sum);

// const filtered = numbers.filter(n => n >= 0)

// const item = filtered.map(n=> '<li>'+ n + '</li>')

// calculatedAge.innerHTML = item

// const square = function(number) {
//     return number * number
// }

// console.log(square(25));

// const jobs = [
//     {id: 1, isActive: true},
//     {id: 2, isActive: true},
//     {id: 3, isActive: false}
// ]

// jobs.filter(function(job) {return job.isActive})

// console.log(jobs);

// const person = {
//     talk() {
//         setTimeout(function() {
//             console.log("this is this key word", this);
//         }, 1000);
//     }
// }

// person.talk()

// const colors = ['red','green','blue']

// const colorMap = colors.map(color => '<li>' + color + '</li>' )

// console.log(colorMap);

// const addres = {
//     street: '',
//     city: '',
//     country: ''
// }

// const [street, city, country] = addres

// console.log(addres);
// console.log(street);

// const first = [1,2,3]
// const second = [4,5,6]

// const combined = first.concat(second)

// const combined = [...first, 'a' , ...second , 'b']

// const clone = [...first]

// console.log(clone);

// const colors = ['red','green', 'blue']

// const item = colors.map(color => `<li>${color}</li>` )

// console.log(item);

// const addres = {
//     street: '',
//     city: '',
//     country: ''
// }

// const {street, city, country} = addres

// console.log(street);

// const first = {name: 'Mosh' }
// const job = {job: 'Instructor' }

// const combined = {...first, ...job, location: 'Australia'}

// console.log(combined);

// const person = {
//     name: 'Mosh',
//     walk() {
//         console.log('walk');
//     }
// }



// const person = new Person('Mosh')
// person.

// import {Teacher} from './teacher'
// import { Person } from './person';

// const teacher = new Teacher('Mosh', 'Msc')
// console.log(teacher);

// teacher.teach()
