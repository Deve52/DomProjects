// -----------TASK FOR ME RELATED TO STUDY---------
// GO COACHING AS SOON AS POSSIBLE👍
// BEFORE AFTER THINGS
// TALK TO GAYA ABOUT PROJECT AND GIT AND GITHUB
// MAKE NESSWELL PROJECT
// MAKE WEBSLAYERS PROJECT


const Products = [
    {
        name: "Smartphone",
        brand: "Samsung",
        price: 69999,
        category: "Mobile",
        features: ["5G", "128GB Storage", "AMOLED Display"]
    },
    {
        name: "Laptop",
        brand: "Dell",
        price: 54999,
        category: "Computers",
        features: ["Intel i5", "8GB RAM", "512GB SSD"]
    },
    {
        name: "Smartwatch",
        brand: "Apple",
        price: 24999,
        category: "Wearables",
        features: ["Heart Rate Monitor", "GPS", "Water Resistant"]
    },
    {
        name: "Bluetooth Speaker",
        brand: "JBL",
        price: 8999,
        category: "Audio",
        features: ["Portable", "Waterproof", "10-hour Battery"]
    },
    {
        name: "Wireless Earbuds",
        brand: "Sony",
        price: 12999,
        category: "Audio",
        features: ["Noise Cancellation", "Bluetooth 5.0", "20-hour Battery"]
    },
    {
        name: "Gaming Console",
        brand: "Sony",
        price: 49999,
        category: "Gaming",
        features: ["4K Gaming", "1TB Storage", "VR Support"]
    },
    {
        name: "Smart TV",
        brand: "LG",
        price: 79999,
        category: "Home Entertainment",
        features: ["4K UHD", "WebOS", "AI Sound"]
    },
    {
        name: "Tablet",
        brand: "Apple",
        price: 59999,
        category: "Mobile",
        features: ["Liquid Retina Display", "256GB Storage", "Face ID"]
    },
    {
        name: "Digital Camera",
        brand: "Canon",
        price: 44999,
        category: "Photography",
        features: ["24MP", "4K Video", "WiFi Connectivity"]
    },
    {
        name: "Router",
        brand: "TP-Link",
        price: 1999,
        category: "Networking",
        features: ["Dual Band", "1200 Mbps", "Parental Controls"]
    }
];
let allProducts=document.querySelector(".allProducts")
let search= document.querySelector(".search")

let pro;
let addData=(pro)=>{
    let sum=""
pro.forEach((elem)=>{
 sum+=`  <div class="product h-[100px] w-[300px] rounded-[10px] bg-gray-500">
                    <h1 class=" text-xl font-medium ">${elem.name}</h1>
                    <h2 class=" text-xl font-medium ">brand:${elem.brand}</h2>
                    <h1 class=" text-xl font-medium ">price:${elem.price}</h1>
                </div>`
})
// console.log(sum)
allProducts.innerHTML=sum;
}



search.addEventListener("input",(letter)=>{
    let filteredElem = Products.filter((obj)=>{
        console.log(letter.target.value)
        
        return obj.name.toLowerCase().startsWith(letter.target.value.toLowerCase())//true or false

    })
    addData(filteredElem);
})

addData(Products);





