//1. forEach()
// 
//only value using
const numbers=[1,2,3,4,5,6,7,8,9,10]; //array
 numbers.forEach((value)=>{       //getMyNumbers  is a parameter that takes the value of each element in the array 
    console.log(value);
});

//value and index using for each

const myNumbers=[1,2,3,4,5,6,7,8,9,10]; //array
myNumbers.forEach((value,index)=>{
    console.log("index: "+ index+"  "+ "value: "+value);
})

//get one elements pick 
//example


const user=[
    {full_name:"mi", age: 20, city:"chennai", salary:"10000"},
    {full_name:"vivo", age: 18, city:"salem", salary:"10500"},
    {full_name:"unix", age: 40, city:"madurai", salary:"11000"},
    {full_name:"poco", age: 69, city:"thiruchy", salary:"12000"},
    {full_name:"0ppo", age: 70, city:"Thukukudi", salary:"12500"}
]
//i will get array 
//foreach function
user.forEach(((getMyData)=>{
    console.log(getMyData.salary);//subrate the  data 
}))


//2. map() Method

//map using double Numbers
const double=[1,2,3,4,5,6,7,8,9];
let newDouble=double.map(number=>number*2);//number*2 is double number 
console.log(newDouble);

//map() Method using to find sqrt
const doubleNumbers=[1,2,3,4,5,6,7,8,9,10]; //array
let sqrt= doubleNumbers.map((numbers)=>{  //calling map
    return Math.sqrt(numbers).toFixed(2); //return  math is javascript math function calling 
    //toFixed using in only  two  decimal place
});
console.table(sqrt); //using table to view is good 


//capitalized convert in map
const words=['hello', 'web']
console.log(words);

const capitalizedWord=words.map(word => word.toUpperCase());
console.log(capitalizedWord);


// find age Eligible

const users=[
    {full_name:"Ram ", age: 10, city:"chennai", salary:"10000"},
    {full_name:"Ravi", age: 18, city:"salem", salary:"10500"},
    {full_name:"Sham", age: 20, city:"madurai", salary:"11000"},
    {full_name:"Tamizh", age: 16, city:"thiruchy", salary:"12000"},
    {full_name:"Aravind", age: 17, city:"Thukukudi", salary:"12500"}
] //array

let eligible_status=users.map((users)=>({  //map calling  ({})is full object
    // name:users.full_name,    //
    // age:users.age,
    // city:users.city,
    // salary:users.salary,//calling user deatils
    // status:(users.age>=18) ? "Eligible" : "Not Eligible" //calling crate new  obj and add into array
    //or spred oprater method
    ...users,
    status:(users.age>=18) ? "Eligible":"Not Eligible"
}))
console.table(eligible_status);

//combining arrays
//combine arrays only evenly array content

const fruit=['apple', 'banana'];
const color=[ 'red', 'yellow'];//arrays

const combineArray=fruit.map((fruit,index)=>fruit+"-"+color[index]); //index 0
console.log(combineArray);
// filtering an array im map method boolean value return

const num=[1,2,3,4,5];//array
const evenNumbers=num.map(number=> number%2==0);  //return true or false
console.log(evenNumbers);

//4. filter()method

const newNumbers=[1,2,3,4,5,6,7,8,9,10]; 
let getEvennumbers= newNumbers.filter(num=>num%2==0);
console.log(getEvennumbers);

//find above 20 age users find in filter  method

let members=[
    
    {full_name:"Ram ", age: 10, city:"chennai", salary:"10000"},
    {full_name:"Ravi", age: 18, city:"salem", salary:"10500"},
    {full_name:"Sham", age: 23, city:"madurai", salary:"11000"},
    {full_name:"Tamizh", age: 26, city:"thiruchy", salary:"12000"},
    {full_name:"Aravind", age: 47, city:"Thukukudi", salary:"12500"}
]
let abovetwenty=members.filter(members => members.age >20); 
console.log(abovetwenty);

//find
let books=[
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', year: 2011 },
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
    { title: 'Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics', author: 'Jennifer Niederst Robbins', year: 2012 },
    { title: 'HTML and CSS: Design and Build Websites', author: 'Jon Duckett', year: 2011 },
    { title: 'CSS Secrets: Better Solutions to Everyday Web Design Problems', author: 'Lea Verou', year: 2015 },
    { title: 'JavaScript and JQuery: Interactive Front-End Web Development', author: 'Jon Duckett', year: 2014 },
    { title: 'You Don\'t Know JS', author: 'Kyle Simpson', year: '2014-2019' },
    { title: 'React: Up & Running', author: 'Stoyan Stefanov', year: 2016 },
    { title: 'Node.js Design Patterns', author: 'Mario Casciaro', year: 2014 },
    { title: 'Head First Design Patterns', author: 'Eric Freeman and Elisabeth Robson', year: 2004 }
];

const searchTerm='HTML'; //search for html word only

const filterBooks=books.filter(book => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||//or symbole
     book.year=== 2011; //or year input to find years
})
console.log(filterBooks);

