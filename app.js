let textInput = document.getElementById('textarea-style');
let btn = document.getElementById('encrypt-button');
let btn2 = document.getElementById('decrypt-button');

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

function decrypt(msg, keys){
    let strSplit = msg.split(" ");
    let decryptedMsg = ""
    console.log(strSplit.length);
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



function getValueEncrypt(input){
    let encryptedmsg = convertText(input, 'encrypt');
    console.log(encryptedmsg);
}

function getValuedecrypt(input){
    let encryptedmsg = convertText(input, 'decrypt');
    console.log(encryptedmsg);
}

//evento del boton encriptar
btn.addEventListener("click",  () => {
    getValueEncrypt(textInput.value);
    textInput.value = '';
    });

//evento del boton desencritar
btn2.addEventListener("click",  () => {
    getValuedecrypt(textInput.value);
    textInput.value = '';
    });