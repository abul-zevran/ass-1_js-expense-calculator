const expenseInput = document.getElementById("expenseInput");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

let expenses = [];

// total calculation using reduce()
function calculateTotal() {
  const total = expenses.reduce((sum, value) => sum + value, 0);
  totalAmount.textContent = total;
}

addBtn.addEventListener("click", () => {
  const value = expenseInput.value.trim();

  // validation
  if (value === "" || isNaN(value)) {
    alert("Please enter a valid number");
    return;
  }

  const amount = Number(value);
  expenses.push(amount);

  // update UI
  const li = document.createElement("li");
  li.textContent = `${amount} ৳`;
  expenseList.appendChild(li);

  calculateTotal();
  expenseInput.value = "";
});
