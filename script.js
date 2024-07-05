document.addEventListener("DOMContentLoaded", function() {
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

  var menuButton = document.querySelector('.fa-bars');
  var menu = document.querySelector('nav ul');
  var body = document.body;
  var overlay = document.getElementById("nav-overlay");  // Assuming this is the element you want to blur

  function openMenu() {
    menu.classList.add('show');
    body.classList.add('menu-open');
    overlay.classList.add('blur');  // Add blur effect
  }

  function closeMenu() {
    menu.classList.remove('show');
    body.classList.remove('menu-open');
    overlay.classList.remove('blur');  // Remove blur effect
  }

  function toggleMenu(event) {
    event.stopPropagation();  // Prevent the event from propagating to document
    if (menu.classList.contains('show')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function clickOutsideMenu(event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  }

  menuButton.addEventListener('click', toggleMenu);
  document.addEventListener('click', clickOutsideMenu);

  // Prevent menu click from closing itself
  menu.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  // Close menu when clicking on menu items
  document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', closeMenu);
  });

  // Google form submit
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxURh7OEk3X5Jy9aEL6ttvECeT85LsCk7x0YkRGKqSoxbPQpEChPdrF2Wn44TK2LWPpuA/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function() {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  });
});
