const nameField = document.querySelector('.name');
const usernameFiled = document.querySelector('.username');
const emailField = document.querySelector('.email');
const bioField = document.querySelector('.bio');
const logoutBtn = document.querySelector('.logout-btn');

const fetchUser = async () => {
  try {
    const res = await fetch(`/profile`, {
      method: 'GET',
      credentials: 'include',
    });

    if (res.status !== 200) return (window.location.href = '/login.html');

    const { data } = await res.json();
    nameField.innerHTML = data.name;
    usernameFiled.innerHTML = data.username;
    emailField.innerHTML = data.email;
    bioField.innerHTML = data.bio;
  } catch (error) {
    console.error(error);
  }
};

const logOutUser = async () => {
  try {
    const res = await fetch('/logout');
    const data = await res.json();
    alert(data.msg);
    window.location.href = '/';
  } catch (error) {
    console.error(error);
  }
};

fetchUser();

logoutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  logOutUser();
});
