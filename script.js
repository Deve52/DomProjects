let array=[
    {
        username:"diva",
        profilePic:"https://images.unsplash.com/photo-1531908012224-8f8865e79a96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmxzJTIwY2xvc2V1cHxlbnwwfHwwfHx8MA%3D%3D",
        statusPic:"https://images.unsplash.com/photo-1446160657592-4782fb76fb99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmxzfGVufDB8fDB8fHww",
        time:"5 hours ago"

    },
    {
        username:"ishita",
        profilePic:"https://images.unsplash.com/photo-1535987309421-9fa2b1bca07e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzJTIwY2xvc2V1cHxlbnwwfHwwfHx8MA%3D%3D",
        statusPic:"https://images.unsplash.com/photo-1461685265823-f8d5d0b08b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdpcmxzfGVufDB8fDB8fHww",
        time:"6 hours ago"

    },
    {
        username:"princy",
        profilePic:"https://images.unsplash.com/photo-1500263420517-84cf3187b186?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzJTIwY2xvc2V1cHxlbnwwfHwwfHx8MA%3D%3D",
        statusPic:"https://images.unsplash.com/photo-1455215540020-876b3233799f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdpcmxzfGVufDB8fDB8fHww",
        time:"30 min ago"

    },
    {
        username:"dharti",
        profilePic:"https://images.unsplash.com/photo-1532487717343-4b171d483b72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGdpcmxzJTIwY2xvc2V1cHxlbnwwfHwwfHx8MA%3D%3D",
        statusPic:"https://images.unsplash.com/photo-1459184113209-08daa5161363?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGdpcmxzfGVufDB8fDB8fHww",
        time:"90 sec ago"

    },
    {
        username:"gourvi",
        profilePic:"https://images.unsplash.com/photo-1534253793691-345e1df9d8e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGdpcmxzJTIwY2xvc2V1cHxlbnwwfHwwfHx8MA%3D%3D",
        statusPic:"https://images.unsplash.com/photo-1516370710288-61c18f5ed3a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGdpcmxzfGVufDB8fDB8fHww",
        time:"14 min ago"

    }
   
]


let allstatus=document.querySelector(".allstatus")
let fulldiv=document.querySelector(".full")
let bg=document.querySelector(".full")

let sum=''

array.forEach((obj,idx)=>{
   sum+=` <div class="status px-3 py-2  w-full  flex items-center gap-5  ">
                    <div class="bg bg-green-400 px-[2px] py-[2px] h-[70px] w-[70px] rounded-full overflow-hidden">
                        <img id='${idx}' class="h-full w-full object-cover rounded-full" src="${obj.profilePic}" alt=""> 
                    </div>
                    <div class="data">
                        <h2 class="text-xl">${obj.username}</h2>
                        <h4 class="text-sm opacity-[70%]">${obj.time}</h4>
                    </div>
                </div>`
                
})
// console.log(sum)
allstatus.innerHTML=sum

allstatus.addEventListener("click",(dets)=>{
    //  console.log(dets.target.id)
    let val=array[dets.target.id]
    
     
                    let width=0
                    let data=''
                    let widthtime= setInterval(() => {
                       width++
 
                       let data=`
                       <div class="mt-2  h-[4px] w-full bg-gray-500">
                       <div class="wide h-full w-[${width+"%"}] rounded-full bg-white"></div>
                       </div>
                       <div class="statusFull px-3 py-2  w-full  flex items-center gap-5  ">
                                       <div class="bg   h-[70px] w-[70px] rounded-full overflow-hidden">
                                       <img class="h-full w-full object-cover rounded-full" src="${val.profilePic}" alt=""> 
                                       </div>
                                       <div class="data">
                                       <h2 class="text-xl">${val.username}</h2>
                                       <h4 class="text-sm opacity-[70%]">${val.time}</h4>
                                       </div>
                                       
                                       </div>`
                                       fulldiv.innerHTML=data 
                                       fulldiv.style.display='block';
                                       fulldiv.style.backgroundImage=`url(${val.statusPic})`
                       
                       
                    }, 30);

                    setTimeout(() => {
                        clearInterval(widthtime)
                        fulldiv.style.display='none'
                        width=0
                        
                    }, 3000);
            
  
})
