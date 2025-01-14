let futureDate=new Date("2025-11-25T00:00:00")
// console.log(futureDate.getTime())
let h1=document.querySelector(".main .time")


setInterval(()=>{
    let main=document.querySelector(".main")
    let r=Math.floor(Math.random()*150)
let g=Math.floor(Math.random()*150)
let b=Math.floor(Math.random()*150)
main.style.background=`linear-gradient(to left,rgb(${r},${g},${b}),rgb(${g},${b},${r}))`
},3000)
setInterval(()=>{
    let current=new Date()
// console.log(current.getTime())
let totalMilli= futureDate.getTime() -  current.getTime();
// console.log(totalMilli)
let days=Math.floor(totalMilli/(1000*60*60*24))
// console.log(days)
let hours=Math.floor(totalMilli/(1000*60*60))%24
// console.log(hours)
let min=Math.floor(totalMilli/(1000*60))%60
// console.log(min)
let sec=Math.floor(totalMilli/(1000))%60
// console.log(sec)
h1.textContent=`days left: ${days}, hours left: ${hours}, minutes left: ${min}, second left: ${sec}`


},1000)
