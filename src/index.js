import cipher from './cipher.js';   

let button = document.getElementById("button-01");
let secretMessage = document.getElementById("newMessage");
console.log(secretMessage);
let displacementInNumber = document.getElementById("displacementUser");
console.log(displacementInNumber);
console.log(button);

button.addEventListener("click", function(){
        let result = cipher.encode(parseInt(displacementInNumber.value),secretMessage.value);
        console.log(result);
        document.getElementById("final-image").innerHTML=result;
});

let button2 = document.getElementById("button-02");
let secretMessage2 = document.getElementById("newMessage");
let displacementInNumber2 = document.getElementById("displacementUser");

button2.addEventListener("click", function(){
        let result2 = cipher.decode(parseInt(displacementInNumber2.value),secretMessage2.value);
        document.getElementById("final-image2").innerHTML=result2;
});