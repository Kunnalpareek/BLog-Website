const header = document.getElementById("title");
const text = document.getElementById("paragraph");
const form = document.querySelector(".postform");
const del = document.querySelectorAll(".delete");
const edit =document.querySelectorAll(".edit");
const createBtn = document.querySelector("createBtn");

function deleteRow(index) {
  console.log('My Index'+index);
}



del.forEach(element => {
  element.addEventListener("click",()=>{
      // alert(element.parentNode.id);
      console.log()
    });
});

function myFunction() {
  document.querySelector("#form").focus();
}