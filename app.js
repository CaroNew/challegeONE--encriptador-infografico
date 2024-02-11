let textInput = document.getElementById('textarea-style');
let btn = document.getElementById('encrypt-button');
let btn2 = document.getElementById('decrypt-button');
let outputText = document.getElementById('text-result');

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

function addOutput(output, text){
    output.replaceChildren();

    const p = document.createElement('p');
    p.className = 'user-input';
    p.innerHTML = text;
    output.appendChild(p);

    output.classList.remove('hide');
}

function getValueEncrypt(input){

    if(emptyInputAlert(input)){
        return;
    }

    outputText.replaceChildren();
    
    let encryptedmsg = convertText(input, 'encrypt');

    addOutput(outputText, encryptedmsg);

    console.log(encryptedmsg);
    return encryptedmsg;
}

//
function getValuedecrypt(input){

    if(emptyInputAlert(input)){
        return;
    }

    let decryptedmsg = convertText(input, 'decrypt');
    addOutput(outputText, decryptedmsg)

    console.log(decryptedmsg);
    return decryptedmsg;
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
