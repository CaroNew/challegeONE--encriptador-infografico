let textInput = document.getElementById('textarea-style');
let btn = document.getElementById('encrypt-button');
let btn2 = document.getElementById('decrypt-button');
let outputText = document.getElementById('text-result');
let textP = document.getElementById('user-text');
let btn3;

/*toma un texto y una llave, retorna 
un string "encriptado"*/
function encrypt(msg, keys){
    let strSplit = msg.split("");
    let encryptedMsg = ""
  
    for(let i = 0; i < strSplit.length; i++) {
        let key = strSplit[i];
            if(keys[key]){
                encryptedMsg += keys[key] 
            }else{
                encryptedMsg += key;
            }
    }
    return encryptedMsg;
}

/*toma un texto y una llave, retorna 
un string "desencriptado"*/
function decrypt(msg, keys){
    let strSplit = msg.split(" ");
    let decryptedMsg = ""
    
    for(let i = 0; i < strSplit.length; i++) {
        let str = strSplit[i];
        for(let key in keys){
            if(str.indexOf(keys[key]) > -1){
                str = str.replaceAll(keys[key], key); 
            }
        }
        decryptedMsg += str + " ";  
    }
    return decryptedMsg;
}

function convertText(message, fun){  
    const keys = {
      a: 'ai', 
      e: 'enter',
      i: 'imes',
      o: 'ober',
      u: 'ufat'
    }

    if(fun === 'encrypt'){
        return encrypt(message, keys);
    }
    if(fun === 'decrypt'){
        return decrypt(message, keys);
    }
  }
  
/* devuelve true si el input es vacio*/
function emptyInputAlert(input){
    if(!input){
        alert('Por favor ingrese un valor!')
    }
    return Boolean(!input);
}

//agrega el elemento html con el resultado
// y el boton de copiar
function addOutput(output, text){
    output.replaceChildren();

    //creando un elemento p que almacena el
    //resultado
    const p = document.createElement('p');
    p.className = 'user-output';
    p.id = 'user-text';
    p.innerHTML = text;
    output.appendChild(p);

    //creando el botón copiar
    const btn = document.createElement('button');
    btn.id = 'copy-button';
    btn.className = 'button-style';
    btn.innerText = 'Copiar';
    output.appendChild(btn);
    btn3 = document.getElementById('copy-button');
    //evento del boton copiar
    btn3.addEventListener('click', btnCpy);

    output.classList.remove('hide');
}

//toma el input y lo convierte
function getValueEncrypt(input){

    if(emptyInputAlert(input)){
        return;
    }

    let encryptedmsg = convertText(input, 'encrypt');
    addOutput(outputText, encryptedmsg);
    return encryptedmsg;
}

//toma el input y lo convierte
function getValuedecrypt(input){

    if(emptyInputAlert(input)){
        return;
    }

    let decryptedmsg = convertText(input, 'decrypt');
    addOutput(outputText, decryptedmsg);
    return decryptedmsg;
}

//funcion para copiar el texto
function btnCpy(){
    const textToCopy = document.querySelector('.user-output').innerText;
    navigator.clipboard.writeText(textToCopy);
}

//evento del boton encriptar
btn.addEventListener("click",  () => {
    getValueEncrypt(textInput.value);
    textInput.value = '';
    textInput.focus();
    });

//evento del boton desencriptar
btn2.addEventListener("click",  () => {
    getValuedecrypt(textInput.value);
    textInput.value = '';
    textInput.focus();
    });

