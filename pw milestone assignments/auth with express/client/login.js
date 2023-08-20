const inps = document.querySelectorAll('.inp');
const loginForm = document.getElementById('loginForm');
const backendURI = 'http://localhost:5000';

const handleSubmit = async () => {
  let formObj = {};
  [...inps].forEach((e) => {
    formObj[e.name] = e.value;
  });

  const res = await fetch(`/login`, {
    method: 'POST',
    body: JSON.stringify(formObj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const data = await res.json();
  if (res.status !== 200) return alert(data.msg);
  else {
    formObj = {};
    window.location.href = '/';
    alert("You're loged in successfully.");
  }
};

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  handleSubmit();
});

console.log(document.cookie);
