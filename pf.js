

let aboutRightSkills = document.querySelector(".about-right-skills");
let aboutRightList = document.querySelector(".about-right-list");
let aboutRightExp= document.querySelector(".about-right-Exp");

let aboutRightList1 = document.querySelector(".about-right-list1");
let aboutRightList2 = document.querySelector(".about-right-list2");

aboutRightList1.style.display = "none"; 
aboutRightList2.style.display = "block"; 

aboutRightSkills.addEventListener("click",function(){
    aboutRightList1.style.display="block";
      aboutRightList2.style.display="none";
})

aboutRightExp.addEventListener("click",function(){
    aboutRightList2.style.display="block";
      aboutRightList1.style.display="none";
})



// service part 

let sBox1=document.querySelector(".s-box-1");

sBox1.addEventListener("mouseover",function(){
    sBox1.style.backgroundColor="palegreen";
});

sBox1.addEventListener("mouseout",function(){
  sBox1.style.backgroundColor="rgba(175, 238, 238, 0.779)";
});

let sBox2=document.querySelector(".s-box-2");

sBox2.addEventListener("mouseover",function(){
    sBox2.style.backgroundColor="palegreen";
});

sBox2.addEventListener("mouseout",function(){
  sBox2.style.backgroundColor="rgba(175, 238, 238, 0.779)";
});

let sBox3=document.querySelector(".s-box-3");

sBox3.addEventListener("mouseover",function(){
    sBox3.style.backgroundColor="palegreen";
});

sBox3.addEventListener("mouseout",function(){
  sBox3.style.backgroundColor="rgba(175, 238, 238, 0.779)";
});

