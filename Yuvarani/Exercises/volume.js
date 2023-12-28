function calculateVolume(length, width, height) {

    let volume = length * width * height;
    return volume;
}


let length = 5;
let width = 3;
let height = 2;

console.log("The volume of the box is: " , calculateVolume(length, width, height));
