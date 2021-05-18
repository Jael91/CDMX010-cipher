import cipher from './cipher.js';   

let button = document.getElementById("button-01");
let secretMessage = document.getElementById("newMessage");
let displacementInNumber = document.getElementById("displacementUser");

button.addEventListener("click", function(){
        let result = cipher.encode(parseInt(displacementInNumber.value),secretMessage.value);
        document.getElementById("code-result").innerHTML= result;
        document.getElementById("finalresult").value = result;
});

let button2 = document.getElementById("button-02");

button2.addEventListener("click", function() {
        const offsetFromInput = document.getElementById("displacementUser").value;
        const encodedMessage = document.getElementById("finalresult").value;
        const offset = parseInt(offsetFromInput);
        const result = cipher.decode(offset, encodedMessage);
        
        document.getElementById("decode-result").innerHTML=result;
});