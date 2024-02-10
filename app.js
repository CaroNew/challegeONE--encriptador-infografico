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

function decrypt(msg){
    return;
}

function convertText(message, fun){
    let encryptedMessage = "";
  
    const keys = {
      a: 'ai', 
      e: 'enter',
      i: 'imes',
      o: 'ober',
      u: 'ufat'
    }

    if(fun === 'encrypt'){
        encryptedMessage = encrypt(message, keys);
    }
    

    return encryptedMessage;
  }



function getValue(input){
    let encryptedmsg = convertText(input, 'encrypt');
    console.log(encryptedmsg);
}

//evento del boton
btn.addEventListener("click",  () => {
    getValue(textInput.value);
    textInput.value = '';
    });