let image=document.querySelector(".img");
let background=document.querySelector(".background");
let mainText=document.querySelectorAll(".main-text");
let checkboxItem=document.querySelectorAll(".checkbox-item");

let darkElement=document.querySelectorAll(".dark");
let num=0;
let ulTag=document.querySelector(".ul-tag");
let input=document.querySelector(".input-text")
image.addEventListener("click", ()=>{
    if(num==0){
        document.body.style.backgroundColor="#171823";
        background.style.backgroundImage="url('./images/bg-desktop-dark.jpg')"
        image.src="./images/icon-sun.svg";

        for(let i=0; i<darkElement.length;i++){
            darkElement[i].classList.add("darkElement");
        }
        for(let z=0; z<mainText.length;z++){
            mainText[z].style.color="#C8CBE7"
        }for(let t=0; t<checkboxItem.length;t++){
            checkboxItem[t].style.background="#25273D"
        }
        num=1
    }else{
        document.body.style.backgroundColor="rgba(250,250,250,1)";
        background.style.backgroundImage="url('./images/bg-desktop-light.jpg')"
        image.src="./images/icon-moon.svg";

    for(let i=0; i<darkElement.length;i++){
        darkElement[i].classList.remove("darkElement");
    }for(let z=0; z<mainText.length;z++){
        mainText[z].style.color="#494C68"
    }for(let t=0; t<checkboxItem.length;t++){
        checkboxItem[t].style.background="white"
    }

    num=0
    }
})

let arr=[
    {
        text:"Write the task1",
        checked:false
    },
    {
        text:"Write the task2",
        checked:false
    },
    {
        text:"Write the task3",
        checked:false
    },
    {
        text:"Write the task4",
        checked:false
    },
    {
        text:"Write the task5",
        checked:false
    },
]

function todos(){
for(let u=0;u<arr.length;u++){
ulTag.innerHTML+=`<li>
<div class="flex-cross">
<div class="checkbox-item">
  <input class="checkbox1" type="checkbox">
  <div class="input-div"> </div>
</div>
<h3 class="main-text"> ${arr[u].text} </h3>
</div>
<img class="cross" src="./images/icon-cross.svg"/>
</li>`
}}
todos()
let cross=document.querySelectorAll(".cross");
console.log(cross)
function addTodo(){
 ulTag.innerHTML+=`<li>
    <div class="flex-cross">
    <div class="checkbox-item">
  <input class="checkbox1" type="checkbox">
    <div class="input-div"> </div>
</div>
<h3 class="main-text"> ${arr[arr.length-1].text} </h3>
</div>
<img class="cross" src="./images/icon-cross.svg"/>
</li>`

}
function deleteTodo(){
    for(let r=0;r<cross.length;r++){
        cross[r].addEventListener("click", (e)=>{
            let newarray=arr.filter((item,id)=>item.text!=e.target.parentElement.children[0].children[1].textContent)
            console.log(e.target.parentElement.children[0].children[1])
            console.log(newarray);
            //todos();
        })
    }
}
deleteTodo()

input.addEventListener("keyup", (e)=>{
   if(e.key==="Enter" & e.target.value!==""){
      arr.push({
        text:e.target.value,
        checked:false
      })
      addTodo()
      e.target.value=""
     cross=document.querySelectorAll(".cross");
     console.log(cross)
     deleteTodo()
   }

} )