const btn = document.querySelector('.btn');
const url1 = document.getElementById('inp');
const url2 = document.getElementById('inp2');
const result = document.querySelector('.result');

const fetchFn = async (url1, url2) => {
  try {
    const res1 = await fetch(url1);
    const data1 = await res1.json();
    const res2 = await fetch(url2);
    const data2 = await res2.json();
    const combinedData = { ...data1, ...data2 };
    console.log(combinedData);
    result.innerHTML = JSON.stringify(combinedData);
    return combinedData;
  } catch (error) {
    result.innerHTML = error;
    console.log(error);
    return error;
  }
};

btn.addEventListener('click', (e) => {
  e.preventDefault();

  result.innerHTML = fetchFn(url1.value, url2.value);
});
