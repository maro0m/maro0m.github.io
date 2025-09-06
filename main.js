/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


const toTop= document.querySelector(".to-top");
window.addEventListener("scroll",() =>{
    if(window.pageYOffset>100){
        toTop.classList.add("active");}
    else{
        toTop.classList.remove("active");
    }
})
const subm =document.getElementById("submit_btn");
const input =document.getElementById("myinput1");
const input1 =document.getElementById("myinput2");
const input2 =document.getElementById("myinput3");
const input3 =document.getElementById("myinput4");
subm.addEventListener("click" , () =>{
    if (input1.value.trim()===""){
        alert("Please Your Information")
    }
    if (input2.value.trim()===""){
        alert("Please Your Information")
    }
    if (input3.value.trim()===""){
        alert("Please Your Information")
    }
    if (input4.value.trim()===""){
        alert("Please Your Information")
    }
    else
    {
    alert('Form Is Submitted!!')}
})