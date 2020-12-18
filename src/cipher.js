const cipher = {
        encode (displacementInNumber,secretMessage){   
            let result;
            let array=[]; 
            for(let i = 0;i<secretMessage.length;i++){ 
                if(secretMessage.charCodeAt(i)>=65 && secretMessage.charCodeAt(i)<=90){
                    result = String.fromCharCode((secretMessage.charCodeAt(i)-65 + displacementInNumber)%26+65);
                    array.push(result)
            }
                        else if(secretMessage.charCodeAt(i) >= 97 && secretMessage.charCodeAt(i)<=122){
                        result=String.fromCharCode((secretMessage.charCodeAt(i)-97+displacementInNumber)%26+97);
                        array.push(result)
                        console.log(array)
                }
        
        }
        return array.join(""); 
    },
        decode (displacementInNumber2,secretMessage2){
            let result2;
            let array2=[];
            for(let i = 0;i<secretMessage2.length;i++){
                if(secretMessage2.charCodeAt(i)>= 65 && secretMessage2.charCodeAt(i)<=90){
                    console.log(secretMessage2.charCodeAt(i))
                    result2 = String.fromCharCode((secretMessage2.charCodeAt(i)-65 - displacementInNumber2)%26+65);
                    array2.push(result2)
                }
            }
        return array2.join(""); 
    },
};

export default cipher;
