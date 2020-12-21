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
        document.getElementById("resultadofinal").value = result;
});

let button2 = document.getElementById("button-02");
//let secretMessage2 = document.getElementById("final-image");

button2.addEventListener("click", function() {
        const offsetFromInput = document.getElementById("displacementUser").value;
        const encodedMessage = document.getElementById("resultadofinal").value;
        const offset = parseInt(offsetFromInput);
        const result = cipher.decode(offset, encodedMessage);
        
        document.getElementById("final-image2").innerHTML=result;
});