
//funktion för kompetens, erfarenhet och utbildning för att öppna olika tabbar
let tab_top_titles=document.getElementsByClassName('tab-title');
let tab_contents=document.getElementsByClassName('tab-content');
function opentab(event, tabname){
    for (let tab_top_title of tab_top_titles){
        tab_top_title.classList.remove('active-title');
    }
    for (let tab_content of tab_contents){
        tab_content.classList.remove('active-tab');
    }
    event.target.classList.add('active-title');
    document.getElementById(tabname).classList.add('active-tab')
}

//funktion för hamburger-menu
function navMenu() {
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}