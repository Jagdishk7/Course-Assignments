const submit = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const output = document.getElementById("output");

  if (email.includes("@") && password.length >= 8) {
    output.innerText = "Valid email and password!";
    output.style.color = "green";
  } else {
    output.innerText = "Invalid email or password!";
    output.style.color = "red";
  }
};
