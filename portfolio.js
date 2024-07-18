function showLoginForm(){
    const navbarlink = document.getElementById('nav-bar-link');


    navbarlink.style.display = 'flex';
  }
  function hideLoginForm(){
    const navbarlink= document.getElementById('nav-bar-link');

    navbarlink.style.display ='none';

  }
function closePage(){
    document.getElementById('nav-bar-link').style.display = 'none';
}
