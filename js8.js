let colorBox=document.querySelector(".colorBox")
let changeButton=document.querySelector(".change")
let collector=document.querySelector(".collector")
let smallBox=document.querySelector(".small")


changeButton.addEventListener("click",()=>{
    let r=Math.floor(Math.random()*226)
    let g=Math.floor(Math.random()*226)
    let b=Math.floor(Math.random()*226)

    colorBox.style.backgroundColor=`rgb(${r} ${g} ${b})`
    colorBox.style.pointerEvents="fill"
   
})
let colorArray=[]

colorBox.addEventListener("click",(dets)=>{
     let color=dets.target.style.backgroundColor
     console.log(color)
     if(colorArray.includes(color)){

     }

     else{

         let small = document.createElement("div")
         small.setAttribute("class","small h-[5vh] w-[3vw] rounded-[10px]")
         small.style.backgroundColor=color;
         collector.appendChild(small)
         colorArray.push(color)
     }
    
})

  //to remove the selected color by  clicking
    collector.addEventListener("click",(dets)=>{
        
        console.log(dets.target)
        collector.removeChild(dets.target)

        //removing from color array
       let clickcol=dets.target.style.backgroundColor
       let id=colorArray.indexOf(clickcol)
       colorArray.splice(id,1)
       console.log(colorArray)

    })

 



