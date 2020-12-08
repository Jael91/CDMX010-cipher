const cipher ={ //declaro un objeto con la variable local "const", misma que no cambia
    code: (displacement,text)=>{ // keyvalue 1 (acá sí puedo meter cambios). Mis 2 keyvalues son Desplazamiento y Texto.
        let newMessage=" "; //???? lo que quiero hacer es que permita que entre cualquier tipo de texto
        let displacementUser = parseInt(displacement); //desplazamiento que ponga el usuario. En caso de que ponga un decimal "parseInt" para que lo convierta a enteroo
        let message; //mensaje nuevo
        for (let i=0;i<text.lenght;i++){ //inicia loop, desde la primera posición del texto y además recorre cada una de las letras
            if (text.charCodeAt(i)>= 65 && text.charCodeAt(i)<=90){ //condición: a los carácteres ingresado conviértelos a ASCII. Cada valor tiene que ser mayor o igual 65 ó menor o igual 90
                //Falta desarrollar lo del desplazamiento
                message=String.fromCharCode((text.charCodeAt(i)-65+displacement)%26+65); // String.fromCharCode(65, 66, 67);   ---> returns "ABC" -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
                newMessage.push(message)
            }
        }
        return newMessage.join('');
    },
    decode

}




// [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z]

/* 
function    desplazamientp4(str) { //ABCD
    for(var i=0; i<str.lenght;i++) {
        console.log(str[i]);
    }
}
*/
