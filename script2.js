login_btn=document.getElementById('btn')
login_btn.addEventListener('click',()=>{

   login_btn.textContent='Logged';

});
login_btn.addEventListener('mouseover',()=>
{
    login_btn.style.backgroundColor="white";
   login_btn.style.color="black";

})
login_btn.addEventListener('mouseout',()=>{
    login_btn.style.backgroundColor="black";
   login_btn.style.color="white";
})
login_btn.addEventListener('dblclick',()=>{

   login_btn.textContent='Login';

});
login_btn.addEventListener("mousedown", () => {
  btn.style.transform = "scale(0.95)";
  btn.style.backgroundColor = "red";
});