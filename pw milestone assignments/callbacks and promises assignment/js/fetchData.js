const btn = document.querySelector('.btn');
const inp = document.querySelector('.inp');
const result = document.querySelector('.result');

// The main answer function which is applicable for question 6th, 8th, and 9th
const fetchFn = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (res.ok === false) {
      throw new Error('No data found');
    }
    console.log(data);
    result.innerHTML = JSON.stringify(data);
    return data;
  } catch (error) {
    console.log(error.message);
    result.innerHTML = error;
    return error;
  }
};

btn.addEventListener('click', (e) => {
  e.preventDefault();

  result.innerHTML = fetchFn(inp.value);
});
