//   length

let string = "hello naveen how are you";
console.log(string.length);


    // uppercaseandlowercase
let str = "i am from heaven,WHERE ARE YOU FROM";
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase())


// character
let input = "miketyson";
console.log(input[8]);

// concatination
let method1 = "naveennaidu7676";
let method2 = "saradarpaparayudu is friends";
let pratice = method1.concat(", ", method2);

console.log("result == ",pratice);

// substring
let text = "vvuiervruovvrvrv,  nvnereuererenre";
console.log(text.indexOf("v"));
console.log(text.lastIndexOf("v"));

let non = "Hello, World!";
console.log(non.indexOf("o")); 
console.log(non.lastIndexOf("o")); 

//   substring startend and slice start start end
let nun = "there is raining outside";
console.log(nun.slice( 1,7));
console.log(nun.substring(0,5));


// replacemethod
let not = "Hello, miketyson";
let newNot = not.replace("hello", "mickeljackson");
console.log(newNot)

//    splitmethod
let num = "car,van,bus,auto";
let vehicles = num.split(",");
console.log(vehicles);

// trim
let mask = "      im in chennaicental       "
console.log(mask.trim());








