let button=document.querySelectorAll("button")
let Answer= document.querySelectorAll(".Answer")
let main=document.querySelector(".main")

// let flag=true
// button.addEventListener("click",()=>{
//     console.log("hey")
//     if(flag){
//     button.style.backgroundColor="rgb(225 29 72)"
//     button.textContent="Hide Answer"
//     Answer.style.display="block"
//     flag=false
// }else{
//     button.style.backgroundColor="rgb(34 197 94)"
//     button.textContent="Reveal Answer"
//     Answer.style.display="none"
//     flag=true
//      }

// })//THIS WILL NOT WORK BECAUSE THE button and Answer has nodelist in them which cant be use as normal variable so we have to put the changes in each of the items individually rather than on a nodelist.


button.forEach((elem) => {
        let flag=true;
        elem.addEventListener("click",(dets)=>{
            console.log(dets)
            let id=dets.target.id

            if(flag){
                elem.style.backgroundColor="rgb(225 29 72)"
                elem.textContent="Hide Answer"
                Answer[id].style.display="block"
                flag=false
            }else{
                elem.style.backgroundColor="rgb(34 197 94)"
                elem.textContent="Reveal Answer"
                Answer[id].style.display="none"
                flag=true
            }
            
        })
    });

















// multiple flag variables are existed simultaneously but each have different scope
    // {
    //     let a=true
    //     console.log(a)
    // }
    // {
    //     let a=false
    //     console.log(a)
    // }
