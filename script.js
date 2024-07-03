
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}



var sidemenu = document.getElementById("sidemenu");
var overlay = document.getElementById("nav-overlay");

function toggleMenu() {
  const menu = document.querySelector('nav ul');
  const body = document.body;
  
  if (menu.classList.contains('show')) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  const menu = document.querySelector('nav ul');
  const body = document.body;
  
  menu.classList.add('show');
  body.classList.add('menu-open');
}

function closeMenu() {
  const menu = document.querySelector('nav ul');
  const body = document.body;
  
  menu.classList.remove('show');
  body.classList.remove('menu-open');
}

// Close menu when clicking on menu items
document.querySelectorAll('nav ul li a').forEach(item => {
  item.addEventListener('click', closeMenu);
});

// Toggle menu on menu button click
document.querySelector('.fa-bars').addEventListener('click', toggleMenu);


//google submit//
const scriptURL = 'https://script.google.com/macros/s/AKfycbxURh7OEk3X5Jy9aEL6ttvECeT85LsCk7x0YkRGKqSoxbPQpEChPdrF2Wn44TK2LWPpuA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(function() {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


// <!-- Service learn more transition didn't work from here  idk why -->
