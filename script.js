
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

function openmenu() {
  sidemenu.style.right = "0";
  overlay.style.display = "block";
  document.body.style.overflow = 'hidden';
}

function closemenu() {
  sidemenu.style.right = "-200px";
  overlay.style.display = "none";
  document.body.style.overflow = 'auto';
}

// Close menu when clicking on a menu item
document.querySelectorAll('#sidemenu a').forEach(item => {
  item.addEventListener('click', closemenu);
});

// Close menu when clicking outside
overlay.addEventListener('click', closemenu);


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
