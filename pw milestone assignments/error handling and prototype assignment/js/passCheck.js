const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const username = document.getElementById('username');
const password = document.getElementById('pass');
const changePassBtn = document.getElementById('changePassBtn');
const changePass = document.getElementById('changePass');

class User {
  constructor(u, p) {
    this.username = u;
    this.pass = p;
  }

  get password() {
    const starrtedPass = this.pass
      .split('')
      .map((i) => '*')
      .join('');
    return starrtedPass;
  }
  set password(newPass) {
    const regex = /^(?=.*[A-Z])/;
    try {
      if (newPass.length >= 8 && regex.test(newPass)) {
        this.pass = newPass;
      } else {
        throw new Error(
          'Password must be 8 characters long and at least contains on uppercase letter.'
        );
      }
    } catch (error) {
      return error;
    }
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const user = new User(username.value, password.value);
  result.innerHTML = user.password;
});

changePassBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const user = new User(username.value, password.value);
  user.password = changePass.value;
  password.value = user.password;
  result.innerHTML = `Changed password : ${user.password}`;
});
