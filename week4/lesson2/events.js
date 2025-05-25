const section= document.querySelectorAll("section");
const input = document.querySelector('input');


section[0].addEventListener('mouseleave',()=>{
    section[0].classList.replace('first-model','green');
})

input.addEventListener('blur',()=>{
    input.style.background='blue';
})
section[0].addEventListener('mousemove', (event)=> {
   section[0].textContent ='MOUSE!';
});
document.addEventListener('keydown', (event) => {
 if (event.key === 'Enter') {
input.style.backgroundColor = 'yellow';
input.value = 'I hit ENTER!';
}
});

section[0].addEventListener("mouseenter", () => {
section[0].textContent = "I am hovering!";
section[0].style.backgroundColor = "orange";
});
    
section[0].addEventListener("mouseleave", () => {
section[0].textContent = "";
section[0].style.backgroundColor = "green"; 
});