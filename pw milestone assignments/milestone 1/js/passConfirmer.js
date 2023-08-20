// password validation algorithm

const btn = document.querySelector('.btn');
const pass = document.getElementById('pass');
const confPass = document.getElementById('confPass');
const msg = document.querySelector('.msg');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (pass.value && confPass.value) {
    if (pass.value !== confPass.value) {
      alert("Password didn't match. Please try again.");
    } else {
      alert(
        'The password is matched and Your account is created successfully.'
      );
    }
  }
});
