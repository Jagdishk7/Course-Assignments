const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const brand = document.getElementById('brand');
const model = document.getElementById('model');
const year = document.getElementById('year');

class Car {
  constructor(b, m, y) {
    this.brand = b;
    this.model = m;
    this.year = y;
  }
  getDescription() {
    const resultStr = `This is a ${this.year} ${this.brand} ${this.model}`;
    console.log(resultStr);
    return resultStr;
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const myCar = new Car(brand.value, model.value, year.value);
  result.innerHTML = myCar.getDescription();
});
