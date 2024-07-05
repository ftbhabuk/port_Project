
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
