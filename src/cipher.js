const cipher = {
    encode (offset, secretMessage){   
            let result;
            let array=[]; 
            for(let i = 0;i<secretMessage.length;i++){ // jqnc, 24
                if(secretMessage.charCodeAt(i)>=65 && secretMessage.charCodeAt(i)<=90){
                    result = String.fromCharCode((secretMessage.charCodeAt(i)-65 + offset)%26+65);
                    array.push(result)
            }
                        else if(secretMessage.charCodeAt(i) >= 97 && secretMessage.charCodeAt(i)<=122){
                        result=String.fromCharCode((secretMessage.charCodeAt(i)-97+offset)%26+97);
                        array.push(result);
                }
        
        }
        return array.join(""); 
    },
    decode (offset, secretMessage) {
        const newOffset = 26 - (offset % 26);
        const result = cipher.encode(newOffset, secretMessage);

        return result;
    },
};

export default cipher;
