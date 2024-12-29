const imageObjects = [
    { url: "https://images.unsplash.com/photo-1733528353457-e657ca1aafc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" },
    { url: "https://images.unsplash.com/photo-1731330269319-0f053cd5d74b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" },
    { url: "https://images.unsplash.com/photo-1557683316-973673baf926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
    { url: "https://images.unsplash.com/photo-1733235015107-5ab658892359?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" },
    { url: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
    { url: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
    { url: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
    { url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
    { url: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" }
];

let main=document.querySelector(".main")
let imgDivtag=document.querySelector(".imgDiv img")
let imgDiv=document.querySelector(".imgDiv")

let sum=''
imageObjects.forEach((obj,idx)=>{
    sum+=` <div id=${idx} class="card h-[20vw] w-[22vw] bg-red-300 cursor-pointer ">
    <img class="image object-cover h-full w-full" src="${obj.url}" alt="">
    </div>`
    
})
main.innerHTML=sum
let card=document.querySelectorAll(".card")

main.addEventListener("click",(elem)=>{
    const selected= elem.target.closest(".card");
    if(selected){
        // console.log(selected.id)
        imgDivtag.setAttribute('src',imageObjects[selected.id].url)
        imgDiv.style.display="block"
        main.style.filter="blur(5px)"
        main.style.pointerEvents="none"
        left.addEventListener("click",()=>{
            if(selected.id>0){
                selected.id--
                imgDivtag.setAttribute('src',imageObjects[selected.id].url)
            }    
        })
        right.addEventListener("click",()=>{
            if(selected.id<imageObjects.length) {
                selected.id++
                imgDivtag.setAttribute('src',imageObjects[selected.id].url)
            }  
        })
        
        
        
    }

})
let cross= document.querySelector(".cross")
cross.addEventListener("click",()=>{
    imgDiv.style.display="none"
        main.style.filter="blur(0px)"
        main.style.pointerEvents="auto"

})

let left=document.querySelector(".swipL")
let right=document.querySelector(".swipR")

let flag=true;
imgDivtag.addEventListener("dblclick",()=>{
   if(flag==true){

        imgDivtag.style.transform="scale(1.5)"
       flag=false
    }
    else{
        imgDivtag.style.transform="scale(1)"
        flag=true

    }
})

