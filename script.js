// <!-- JavaScript -->
  // <script>
    // Mobile menu toggle
    var sidemenu = document.getElementById("sidemenu");
    var overlay = document.getElementById("nav-overlay");
    var menuIcon = document.querySelector(".fa-solid.fa-bars");
    var menuOpen = false;
  
    function toggleMenu() {
      if (window.innerWidth <= 600) {
        if (menuOpen) {
          sidemenu.style.right = "-200px";
          overlay.style.display = "none";
          document.body.style.overflow = 'auto';
          menuIcon.classList.remove("fa-xmark");
          menuIcon.classList.add("fa-bars");
        } else {
          sidemenu.style.right = "0";
          overlay.style.display = "block";
          document.body.style.overflow = 'hidden';
          menuIcon.classList.remove("fa-bars");
          menuIcon.classList.add("fa-xmark");
        }
        menuOpen = !menuOpen;
      }
    }
  
    // Tab switching functionality
    function opentab(evt, tabName) {
      var i, tabcontents, tablinks;
      
      // Hide all tab contents
      tabcontents = document.getElementsByClassName("tab-contents");
      for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
        tabcontents[i].classList.remove("active-tab");
      }
      
      // Remove active class from all tab links
      tablinks = document.getElementsByClassName("tab-links");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
      }
      
      // Show the selected tab content and mark the button as active
      var selectedTab = document.getElementById(tabName);
      selectedTab.style.display = "block";
      
      // Use setTimeout to delay adding the active-tab class, allowing the display change to take effect first
      setTimeout(function() {
        selectedTab.classList.add("active-tab");
      }, 10);
      
      evt.currentTarget.classList.add("active-link");
    }
    
    // Automatically open the first tab on page load
    window.onload = function() {
      document.getElementsByClassName("tab-links")[0].click();
    };
  
    // DOM content loaded event listener
    document.addEventListener('DOMContentLoaded', function() {
      // Set default tab
      document.querySelector('.tab-links').click();
  
      // Service learn more transition
      const serviceDivs = document.querySelectorAll('.services-list div');
      serviceDivs.forEach(div => {
        const link = div.querySelector('a');
        link.addEventListener('mouseenter', function() {
          div.classList.add('link-hover');
        });
        link.addEventListener('mouseleave', function() {
          div.classList.remove('link-hover');
        });
      });
  
      // Close menu when clicking on a menu item
      document.querySelectorAll('#sidemenu a').forEach(item => {
        item.addEventListener('click', toggleMenu);
      });
  
      // Close menu when clicking outside
      overlay.addEventListener('click', toggleMenu);
  
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
  </script>
  <script>
    
  </script>