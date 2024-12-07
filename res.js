//to make download 
// let btn=document.querySelector("button")
// let load=document.querySelector(".greenbox")
// let h1=document.querySelector(".text h1")
// let textbox=document.querySelector(".main")
// let grow=0;
// let check=false

// btn.addEventListener("click",()=>{
//     let time=Math.floor(Math.random()*50)
//     if(check==false){
//     let a=setInterval(() => {
//     grow++
//     // console.log(grow) 
//     load.style.width=grow+"%"
//     h1.textContent=`${grow}%`

//     check=true
    
//    },time);

//    setTimeout(()=>{
//     let head= document.createElement("h1")
//     head.innerHTML=`Your file is downloaded in ${time*100} MilliSeconds`
//     head.style.fontSize="30px"
//     head.style.color="white"
//     textbox.appendChild(head)
//     clearInterval(a)
//     btn.style.opacity="0.5"

//    },time*100)
// }
    
// })