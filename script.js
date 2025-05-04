const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
    "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
    "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let field1 = document.getElementById('field1')
let field2 = document.getElementById('field2')
let inputEl = document.getElementById('pass-length')

function generatePassword(){
    field1.textContent = randomPassword()
    field2.textContent = randomPassword()
}

function randomPassword(){
    let password = ''
    for (let i=0 ; i < inputEl.value ; i++){
        let charactersIndex = Math.floor(Math.random() * characters.length)
        password += characters[charactersIndex]
    }
    return password 
}








