const inps = document.querySelectorAll('.inp');
const signUpForm = document.querySelector('.signUpForm');

const handleSubmit = async () => {
  let formObj = {};
  [...inps].forEach((e) => {
    formObj[e.name] = e.value;
  });

  await fetch(`/register`, {
    method: 'POST',
    body: JSON.stringify(formObj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      alert('User signed up successfully');
      formObj = {};
      window.location.href = '/login.html';
    })
    .catch((err) => alert(err.message));
};

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  handleSubmit();
});
