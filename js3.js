//let submit=document.querySelector(".sub");// we dont put add event listneer to submit button directly because user may submit form by entering rather than clicking.
let inputs = document.querySelectorAll(".input")
let please = document.querySelector(".please")
let cell = document.querySelector(".cell")
let passs = document.querySelector(".passs")
let age = document.querySelector(".age")
let umur = document.querySelector(".umur")



let form = document.querySelector("form")
form.addEventListener("submit", (dets) => {
    dets.preventDefault();
    // console.log(dets);
    let check = true
    inputs.forEach((eachInput) => {
        console.log(eachInput.value.length);
        if (eachInput.value.length === 0) {
            check = false
        }
        // console.log(eachInput)
        
    })
    let phone=document.querySelector(".phone")
    let phoneCount=0;
    for(key in phone.value){
        phoneCount++
    }
    console.log(phoneCount)
    
    
    let pass= document.querySelector(".pass")
    console.log(pass.value.length)
    console.log(pass.value)
    let passCheck= ()=>{
        if(!/[A-Z]/.test(pass.value)) return false;
        if(!/[a-z]/.test(pass.value)) return false;
        if(!/[0-9]/.test(pass.value)) return false;
        if(!/[!@#$%^&*()_+=-`~:;"'.,></?]/.test(pass.value)) return false;
        else return true

    }
    
   
    let radio = document.querySelector("input[name='gender']:checked")
    // console.log(radio)
    if (check && radio !== null) {
        
        if(phoneCount===10){
            // console.log("complete Haiiiiii")
            cell.style.display="none"
        }else{
            console.log("fill the number completely")
            cell.style.display="block"
        }
        if(pass.value.length > 7 && passCheck()){
            console.log("passcode tho bohut strong ha")
            passs.style.display='none'
        }else{
            console.log("weak pathetic passcode")
            passs.style.display='block'

        }
        if(umur.value>17){
            console.log("age below 18")
            age.style.display="none"
         }else{
            console.log("age sufficient")
            age.style.display="block"
         }
          

    } else {
        please.style.display="block"
        console.log("incommmple forrrma")
    }

})
