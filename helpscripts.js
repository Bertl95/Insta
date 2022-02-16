// Hilfsfunktionen
function getById(id) {                                     
    return document.getElementById(id);
}
//Basket Sticky
window.onscroll = function () {                             
    let sidebar = getById('sidebar');
    if (window.scrollY > 0) {
        sidebar.style = 'top: 0';
    }  else {
        sidebar.style = 'top: 74px';
    }
}