const name = document.getElementById('name');
const mode = document.getElementById('mode');
const amount = document.getElementById('amount');

const customerDetails = document.querySelector('.customerDetails');
const updatedDetails = document.querySelector('.updatedDetails');
const find = document.querySelector('.find');
const update = document.querySelector('.update');

let customers = [
  {
    name: 'Vaibhav Prajapat',
    accNum: 1,
    currBal: 150,
  },
  {
    name: 'Hitesh Choudhary',
    accNum: 2,
    currBal: 150000,
  },
  {
    name: 'Anurag Tiwari',
    accNum: 3,
    currBal: 15000,
  },
];

const customerFinder = (name, accNum, mode, amount) => {
  const customer = customers.find((customer) => customer.name === name);
  console.log(customer);
  customerDetails.innerHTML = JSON.stringify(customer);
};

const amountUpdater = (name, accNum, mode, amount) => {
  customers = customers.map((customer) => {
    if (customer.name === name) {
      return {
        ...customer,
        currBal:
          mode == 'deposite'
            ? customer.currBal + amount
            : customer.currBal - amount,
      };
    }
    return customer;
  });

  const updatedCustomerDetails = customers.find(
    (customer) => customer.name === name
  );

  updatedDetails.innerHTML = JSON.stringify(updatedCustomerDetails);
  customerDetails.innerHTML = JSON.stringify(updatedCustomerDetails);
};

find.addEventListener('click', (e) => {
  e.preventDefault();
  customerFinder(
    name.value,
    Number(accNum.value),
    mode.value,
    Number(amount.value)
  );
});

update.addEventListener('click', (e) => {
  e.preventDefault();

  if (name.value && accNum.value && mode.value && amount.value) {
    amountUpdater(
      name.value,
      Number(accNum.value),
      mode.value,
      Number(amount.value)
    );
  }
});
