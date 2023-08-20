const email = document.getElementById('email');
const pass = document.getElementById('pass');

const btn = document.querySelector('.btn');
const msg = document.querySelector('.msg');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const password = pass.value;
  const emailValue = email.value;
  if (emailValue && password) {
    if (!emailValue.includes('@') && !emailValue.includes('.')) {
      msg.innerHTML = 'Please provide correct email';
      console.log(emailValue);
      return;
    }
    if (password.length <= 8) {
      msg.innerHTML = 'Password must be at least 8 characters';
      return;
    }

    msg.innerHTML = 'Account created successfully';
  } else {
    msg.innerHTML = 'Please enter all the fields correctly';
  }
});
