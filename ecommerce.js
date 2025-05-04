

let shopBox1=document.querySelector(".shop-box1");

let shopBox2=document.querySelector(".shop-box2");

let shopBox3=document.querySelector(".shop-box3");
let shopBox4=document.querySelector(".shop-box4");
let shopBox5=document.querySelector(".shop-box5");
let shopBox6=document.querySelector(".shop-box6");
let heroSection=document.querySelector(".herosection");
let blogs=document.querySelector(".blogs");
let shops=document.querySelector(".shops");
let body=document.querySelector("body");

//none property
shopBox1.addEventListener("click",function(){
heroSection.style.display="none";
shops.style.display="none";
blogs.style.display="none";
//maindiv styling

let maindiv=document.createElement("div");
body.appendChild(maindiv)
maindiv.style.height="600px";
maindiv.style.width="100%";

maindiv.style.marginTop="100px";
maindiv.style.position="fixed";
maindiv.style.display="flex";

//divleft styling
let divLeft = document.createElement("div");
maindiv.appendChild(divLeft)
divLeft.style.height="600px";
divLeft.style.width="50%";

divLeft.style.marginTop="10px";

//imgdiv
divLeftImg=document.createElement("div");
divLeft.appendChild(divLeftImg);
divLeftImg.style.height="500px";
divLeftImg.style.width="450px";

divLeftImg.style.marginTop="80px";
divLeftImg.style.marginLeft="200px";
divLeftImg.style.backgroundImage="url('men1.jpeg')";
divLeftImg.style.backgroundSize="cover";
divLeftImg.style.borderRadius="20px";

//divright styling
let divRight= document.createElement("div");
maindiv.appendChild(divRight);
divRight.style.height="600px";
divRight.style.width="50%";

divRight.style.marginTop="10px";

divRightText=document.createElement("div");
divRight.appendChild(divRightText);
divRightText.style.height="550px";
divRightText.style.width="500px";

divRightText.style.marginTop="90px";

let h1=document.createElement("h1");
divRightText.appendChild(h1);
h1.innerText="My Shop Offer:Trending Shop Now";
h1.style.fontSize="40px";

let h3=document.createElement("h3");
divRightText.appendChild(h3);
h3.innerText="Special Price:$50";
h3.style.fontSize="25px";
h3.style.paddingTop="10px";
h3.style.fontWeight="500px";

let h2=document.createElement("h2");
divRightText.appendChild(h2);
h2.innerText="Details Description:";
h2.style.fontSize="25px";
h2.style.paddingTop="10px";

let p=document.createElement("p");
divRightText.appendChild(p);
p.innerText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, odit.Expedita, odit.";
p.style.fontSize="25px";

let button=document.createElement("button");
divRightText.appendChild(button);
button.innerText="Back";
button.style.height="40px";
button.style.width="160px";
button.style.border="none";
button.style.backgroundColor="sienna";
button.style.borderRadius="15px";
button.style.marginTop="25px";
button.style.fontSize="25px";

let button2=document.createElement("button");
divRightText.appendChild(button2);
button2.innerText="Add to cart";
button2.style.height="40px";
button2.style.width="200px";
button2.style.border="none";
button2.style.backgroundColor="sienna";
button2.style.borderRadius="15px";
button2.style.marginTop="20px";
button2.style.marginLeft="25px";
button2.style.fontSize="25px";

button.addEventListener("click",function(){
    heroSection.style.display="flex";
    shops.style.display="block";
    shopBox1.style.display="block";
    blogs.style.display="block";
})

})

//none property
shopBox2.addEventListener("click",function(){
    heroSection.style.display="none";
    shops.style.display="none";
    blogs.style.display="none";
    //maindiv styling
    
    let maindiv=document.createElement("div");
    body.appendChild(maindiv)
    maindiv.style.height="600px";
    maindiv.style.width="100%";
    
    maindiv.style.marginTop="100px";
    maindiv.style.position="fixed";
    maindiv.style.display="flex";
    
    //divleft styling
    let divLeft = document.createElement("div");
    maindiv.appendChild(divLeft)
    divLeft.style.height="600px";
    divLeft.style.width="50%";
    
    divLeft.style.marginTop="10px";
    
    //imgdiv
    divLeftImg=document.createElement("div");
    divLeft.appendChild(divLeftImg);
    divLeftImg.style.height="500px";
    divLeftImg.style.width="450px";
    
    divLeftImg.style.marginTop="80px";
    divLeftImg.style.marginLeft="200px";
    divLeftImg.style.backgroundImage="url('men2.jpg')";
    divLeftImg.style.backgroundSize="cover";
    divLeftImg.style.borderRadius="20px";
    
    //divright styling
    let divRight= document.createElement("div");
    maindiv.appendChild(divRight);
    divRight.style.height="600px";
    divRight.style.width="50%";
    
    divRight.style.marginTop="10px";
    
    divRightText=document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height="550px";
    divRightText.style.width="500px";
    
    divRightText.style.marginTop="90px";
    
    let h1=document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText="My Shop Offer:Trending Shop Now";
    h1.style.fontSize="40px";
    
    let h3=document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText="Special Price:$50";
    h3.style.fontSize="25px";
    h3.style.paddingTop="10px";
    h3.style.fontWeight="500px";
    
    let h2=document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText="Details Description:";
    h2.style.fontSize="25px";
    h2.style.paddingTop="10px";
    
    let p=document.createElement("p");
    divRightText.appendChild(p);
    p.innerText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, odit.Expedita, odit.";
    p.style.fontSize="25px";
    
    let button=document.createElement("button");
    divRightText.appendChild(button);
    button.innerText="Back";
    button.style.height="40px";
    button.style.width="160px";
    button.style.border="none";
    button.style.backgroundColor="sienna";
    button.style.borderRadius="15px";
    button.style.marginTop="25px";
    button.style.fontSize="25px";
    
    let button2=document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText="Add to cart";
    button2.style.height="40px";
    button2.style.width="200px";
    button2.style.border="none";
    button2.style.backgroundColor="sienna";
    button2.style.borderRadius="15px";
    button2.style.marginTop="20px";
    button2.style.marginLeft="25px";
    button2.style.fontSize="25px";
    
    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display="block";
        shopBox1.style.display="block";
        blogs.style.display="block";
    })
    
    })

    //none property
shopBox3.addEventListener("click",function(){
    heroSection.style.display="none";
    shops.style.display="none";
    blogs.style.display="none";
    //maindiv styling
    
    let maindiv=document.createElement("div");
    body.appendChild(maindiv)
    maindiv.style.height="600px";
    maindiv.style.width="100%";
    
    maindiv.style.marginTop="100px";
    maindiv.style.position="fixed";
    maindiv.style.display="flex";
    
    //divleft styling
    let divLeft = document.createElement("div");
    maindiv.appendChild(divLeft)
    divLeft.style.height="600px";
    divLeft.style.width="50%";
    
    divLeft.style.marginTop="10px";
    
    //imgdiv
    divLeftImg=document.createElement("div");
    divLeft.appendChild(divLeftImg);
    divLeftImg.style.height="500px";
    divLeftImg.style.width="450px";
    
    divLeftImg.style.marginTop="80px";
    divLeftImg.style.marginLeft="200px";
    divLeftImg.style.backgroundImage="url('men3.jpg')";
    divLeftImg.style.backgroundSize="cover";
    divLeftImg.style.borderRadius="20px";
    
    //divright styling
    let divRight= document.createElement("div");
    maindiv.appendChild(divRight);
    divRight.style.height="600px";
    divRight.style.width="50%";
    
    divRight.style.marginTop="10px";
    
    divRightText=document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height="550px";
    divRightText.style.width="500px";
    
    divRightText.style.marginTop="90px";
    
    let h1=document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText="My Shop Offer:Trending Shop Now";
    h1.style.fontSize="40px";
    
    let h3=document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText="Special Price:$50";
    h3.style.fontSize="25px";
    h3.style.paddingTop="10px";
    h3.style.fontWeight="500px";
    
    let h2=document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText="Details Description:";
    h2.style.fontSize="25px";
    h2.style.paddingTop="10px";
    
    let p=document.createElement("p");
    divRightText.appendChild(p);
    p.innerText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, odit.Expedita, odit.";
    p.style.fontSize="25px";
    
    let button=document.createElement("button");
    divRightText.appendChild(button);
    button.innerText="Back";
    button.style.height="40px";
    button.style.width="160px";
    button.style.border="none";
    button.style.backgroundColor="sienna";
    button.style.borderRadius="15px";
    button.style.marginTop="25px";
    button.style.fontSize="25px";
    
    let button2=document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText="Add to cart";
    button2.style.height="40px";
    button2.style.width="200px";
    button2.style.border="none";
    button2.style.backgroundColor="sienna";
    button2.style.borderRadius="15px";
    button2.style.marginTop="20px";
    button2.style.marginLeft="25px";
    button2.style.fontSize="25px";
    
    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display="block";
        shopBox1.style.display="block";
        blogs.style.display="block";
    })
    
    })

       //none property
shopBox4.addEventListener("click",function(){
    heroSection.style.display="none";
    shops.style.display="none";
    blogs.style.display="none";
    //maindiv styling
    
    let maindiv=document.createElement("div");
    body.appendChild(maindiv)
    maindiv.style.height="600px";
    maindiv.style.width="100%";
    
    maindiv.style.marginTop="100px";
    maindiv.style.position="fixed";
    maindiv.style.display="flex";
    
    //divleft styling
    let divLeft = document.createElement("div");
    maindiv.appendChild(divLeft)
    divLeft.style.height="600px";
    divLeft.style.width="50%";
    
    divLeft.style.marginTop="10px";
    
    //imgdiv
    divLeftImg=document.createElement("div");
    divLeft.appendChild(divLeftImg);
    divLeftImg.style.height="500px";
    divLeftImg.style.width="450px";
    
    divLeftImg.style.marginTop="80px";
    divLeftImg.style.marginLeft="200px";
    divLeftImg.style.backgroundImage="url('women1.jpg')";
    divLeftImg.style.backgroundSize="cover";
    divLeftImg.style.borderRadius="20px";
    
    //divright styling
    let divRight= document.createElement("div");
    maindiv.appendChild(divRight);
    divRight.style.height="600px";
    divRight.style.width="50%";
    
    divRight.style.marginTop="10px";
    
    divRightText=document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height="550px";
    divRightText.style.width="500px";
    
    divRightText.style.marginTop="90px";
    
    let h1=document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText="My Shop Offer:Trending Shop Now";
    h1.style.fontSize="40px";
    
    let h3=document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText="Special Price:$50";
    h3.style.fontSize="25px";
    h3.style.paddingTop="10px";
    h3.style.fontWeight="500px";
    
    let h2=document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText="Details Description:";
    h2.style.fontSize="25px";
    h2.style.paddingTop="10px";
    
    let p=document.createElement("p");
    divRightText.appendChild(p);
    p.innerText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, odit.Expedita, odit.";
    p.style.fontSize="25px";
    
    let button=document.createElement("button");
    divRightText.appendChild(button);
    button.innerText="Back";
    button.style.height="40px";
    button.style.width="160px";
    button.style.border="none";
    button.style.backgroundColor="sienna";
    button.style.borderRadius="15px";
    button.style.marginTop="25px";
    button.style.fontSize="25px";
    
    let button2=document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText="Add to cart";
    button2.style.height="40px";
    button2.style.width="200px";
    button2.style.border="none";
    button2.style.backgroundColor="sienna";
    button2.style.borderRadius="15px";
    button2.style.marginTop="20px";
    button2.style.marginLeft="25px";
    button2.style.fontSize="25px";
    
    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display="block";
        shopBox1.style.display="block";
        blogs.style.display="block";
    })
    
    })

       //none property
shopBox5.addEventListener("click",function(){
    heroSection.style.display="none";
    shops.style.display="none";
    blogs.style.display="none";
    //maindiv styling
    
    let maindiv=document.createElement("div");
    body.appendChild(maindiv)
    maindiv.style.height="600px";
    maindiv.style.width="100%";
    
    maindiv.style.marginTop="100px";
    maindiv.style.position="fixed";
    maindiv.style.display="flex";
    
    //divleft styling
    let divLeft = document.createElement("div");
    maindiv.appendChild(divLeft)
    divLeft.style.height="600px";
    divLeft.style.width="50%";
    
    divLeft.style.marginTop="10px";
    
    //imgdiv
    divLeftImg=document.createElement("div");
    divLeft.appendChild(divLeftImg);
    divLeftImg.style.height="500px";
    divLeftImg.style.width="450px";
    
    divLeftImg.style.marginTop="80px";
    divLeftImg.style.marginLeft="200px";
    divLeftImg.style.backgroundImage="url('women2.webp')";
    divLeftImg.style.backgroundSize="cover";
    divLeftImg.style.borderRadius="20px";
    
    //divright styling
    let divRight= document.createElement("div");
    maindiv.appendChild(divRight);
    divRight.style.height="600px";
    divRight.style.width="50%";
    
    divRight.style.marginTop="10px";
    
    divRightText=document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height="550px";
    divRightText.style.width="500px";
    
    divRightText.style.marginTop="90px";
    
    let h1=document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText="My Shop Offer:Trending Shop Now";
    h1.style.fontSize="40px";
    
    let h3=document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText="Special Price:$50";
    h3.style.fontSize="25px";
    h3.style.paddingTop="10px";
    h3.style.fontWeight="500px";
    
    let h2=document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText="Details Description:";
    h2.style.fontSize="25px";
    h2.style.paddingTop="10px";
    
    let p=document.createElement("p");
    divRightText.appendChild(p);
    p.innerText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, odit.Expedita, odit.";
    p.style.fontSize="25px";
    
    let button=document.createElement("button");
    divRightText.appendChild(button);
    button.innerText="Back";
    button.style.height="40px";
    button.style.width="160px";
    button.style.border="none";
    button.style.backgroundColor="sienna";
    button.style.borderRadius="15px";
    button.style.marginTop="25px";
    button.style.fontSize="25px";
    
    let button2=document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText="Add to cart";
    button2.style.height="40px";
    button2.style.width="200px";
    button2.style.border="none";
    button2.style.backgroundColor="sienna";
    button2.style.borderRadius="15px";
    button2.style.marginTop="20px";
    button2.style.marginLeft="25px";
    button2.style.fontSize="25px";
    
    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display="block";
        shopBox1.style.display="block";
        blogs.style.display="block";
    })
    
    })

       //none property
shopBox6.addEventListener("click",function(){
    heroSection.style.display="none";
    shops.style.display="none";
    blogs.style.display="none";
    //maindiv styling
    
    let maindiv=document.createElement("div");
    body.appendChild(maindiv)
    maindiv.style.height="600px";
    maindiv.style.width="100%";
    
    maindiv.style.marginTop="100px";
    maindiv.style.position="fixed";
    maindiv.style.display="flex";
    
    //divleft styling
    let divLeft = document.createElement("div");
    maindiv.appendChild(divLeft)
    divLeft.style.height="600px";
    divLeft.style.width="50%";
    
    divLeft.style.marginTop="10px";
    
    //imgdiv
    divLeftImg=document.createElement("div");
    divLeft.appendChild(divLeftImg);
    divLeftImg.style.height="500px";
    divLeftImg.style.width="450px";
    
    divLeftImg.style.marginTop="80px";
    divLeftImg.style.marginLeft="200px";
    divLeftImg.style.backgroundImage="url('women4.jpg')";
    divLeftImg.style.backgroundSize="cover";
    divLeftImg.style.borderRadius="20px";
    
    //divright styling
    let divRight= document.createElement("div");
    maindiv.appendChild(divRight);
    divRight.style.height="600px";
    divRight.style.width="50%";
    
    divRight.style.marginTop="10px";
    
    divRightText=document.createElement("div");
    divRight.appendChild(divRightText);
    divRightText.style.height="550px";
    divRightText.style.width="500px";
    
    divRightText.style.marginTop="90px";
    
    let h1=document.createElement("h1");
    divRightText.appendChild(h1);
    h1.innerText="My Shop Offer:Trending Shop Now";
    h1.style.fontSize="40px";
    
    let h3=document.createElement("h3");
    divRightText.appendChild(h3);
    h3.innerText="Special Price:$50";
    h3.style.fontSize="25px";
    h3.style.paddingTop="10px";
    h3.style.fontWeight="500px";
    
    let h2=document.createElement("h2");
    divRightText.appendChild(h2);
    h2.innerText="Details Description:";
    h2.style.fontSize="25px";
    h2.style.paddingTop="10px";
    
    let p=document.createElement("p");
    divRightText.appendChild(p);
    p.innerText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, odit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, odit.Expedita, odit.";
    p.style.fontSize="25px";
    
    let button=document.createElement("button");
    divRightText.appendChild(button);
    button.innerText="Back";
    button.style.height="40px";
    button.style.width="160px";
    button.style.border="none";
    button.style.backgroundColor="sienna";
    button.style.borderRadius="15px";
    button.style.marginTop="25px";
    button.style.fontSize="25px";
    
    let button2=document.createElement("button");
    divRightText.appendChild(button2);
    button2.innerText="Add to cart";
    button2.style.height="40px";
    button2.style.width="200px";
    button2.style.border="none";
    button2.style.backgroundColor="sienna";
    button2.style.borderRadius="15px";
    button2.style.marginTop="20px";
    button2.style.marginLeft="25px";
    button2.style.fontSize="25px";
    
    button.addEventListener("click",function(){
        heroSection.style.display="flex";
        shops.style.display="block";
        shopBox1.style.display="block";
        blogs.style.display="block";
    })
    
    })


