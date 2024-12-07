let btn=document.querySelector("button")
let body=document.querySelector("body")
let png=[
    'https://imgs.search.brave.com/5JTZ_mqKxlP7qKZpzaZajGIIloYLmgelH7Y-NMUW73E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvRG9v/ZGxlYm9iLVBORy1J/c29sYXRlZC1GaWxl/LnBuZw',
    'https://imgs.search.brave.com/TP274T0dCVNPYXCVyDZsuYe34fK5MPTqJrx_6gDrWkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy90cm9sbC1mYWNl/LTU1LTMwMHgyNjcu/cG5n',
    'https://imgs.search.brave.com/zMXcGiBTWD3H0qRMKxVjQklJnbTzr9MEmLNYnplEm-k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9odWxrLTU1LTIz/MHgzMDAucG5n',
    'https://imgs.search.brave.com/RyJj2T7IEFGzehdASkAGIcZ5LqOBbqgLs0-i8gW3dH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90YWtl/cG5nLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wOS9w/bmctbW9kaS1mcmVl/LW1vZGktZG93bmxv/YWQtaW1hZ2UtMjUw/MHgyNTAwLTEucG5n',
    'https://imgs.search.brave.com/iJrVO3VzvpbPS2sOz7T1aoeoejnSzKUKgVXZepdqTfo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/OS8wMS8wMC8xNS9w/bmctMjcwMjY5MV82/NDAucG5n'
]

btn.addEventListener("click",()=>{
    let valX=Math.random()*85
    let valY=Math.random()*85
    let rot=Math.random()*360
    let i=Math.floor(Math.random()*5)
    let img=document.createElement("img")
    console.log("click")
    img.style.height="100px"
    img.style.left=valX+'%'
    img.style.top=valY+"%"
    img.style.rotate=rot+"deg"
    img.style.position="absolute"
    img.setAttribute("src",png[i])
    body.appendChild(img)
    btn.style.position="absolute"
    btn.style.zIndex='2'

   
})