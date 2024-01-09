 const hamburger            = document.querySelector('#hamburger');
 const menu                 = document.querySelector('#mobile-menu');
 const hideBtnHamburger     = document.querySelector('#hide-menu-btn');
 const menuLists            = document.querySelectorAll('.menu-list');



//  TO DISPLAY MENU ON SMALL SCREEN SIZES
 hamburger.addEventListener('click', ()=>{
    showhide(menu, 'open');   
 })

//  TO HIDE MENU ON SMALL SCREEN SIZES
 hideBtnHamburger.addEventListener('click', ()=>{
    showhide(menu, 'close'); 
 })

 //menu-links====to hide mobile menu when clicked as well....
 menuLists.forEach((link)=>{
    link.addEventListener('click', ()=>{
    showhide(menu, 'close'); 
 })
 })

 


 function showhide(element, task){
    const activities_array= ['close', 'open'];
    const response= activities_array.includes(task.toLowerCase());
    if(!response){
        return
    }else{
        if(task.toLowerCase() === "open"){
            element.classList.remove('hidden');
            element.classList.add('block');
        }else{
            element.classList.remove('block');
            element.classList.add('hidden');
        }
       
    }
 }