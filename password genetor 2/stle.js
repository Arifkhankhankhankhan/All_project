const input=document.querySelector(".inputco")
const output=document.querySelector(".span")

input.addEventListener("input",function(){
console.log(input.value);

let password=input.value;
if(password.length<8){
    output.innerText='password is too short'
    output.style.color="red"
}else{
    if(password.search(/[a-z]/)==-1){
        output.innerText='password doesnt have lower case'
        output.style.color="red"
    }else if(password.search(/[A-Z]/)==-1){
            output.innerText='password doesnt have upper case'
            output.style.color="red"
        }else if(password.search(/[0-9]/)==-1){
            output.innerText='password dont have number'
            output.style.color="red"
        }else if(password.search(/[!@#$%^&()]/)==-1){
            output.innerText='password is dont special character'
            output.style.color="red"
        }
    else{ output.innerText='password is strong'
    output.style.color="green"
    
    }
}

})