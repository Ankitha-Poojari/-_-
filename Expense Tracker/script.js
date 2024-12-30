// DOM Elements
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const totalExpenseElement = document.getElementById('total-expense');
const calculateTotalButton = document.getElementById('calculate-total');

// Local Storage Functions
const getExpenses = () => JSON.parse(localStorage.getItem('expenses')) || [];
const saveExpenses = (expenses) => localStorage.setItem('expenses', JSON.stringify(expenses));

// Calculate Total Expense
const calculateTotalExpense = () => {
  const expenses = getExpenses();
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  totalExpenseElement.textContent = total.toFixed(2);
};

// Render Expenses
const renderExpenses = () => {
  const expenses = getExpenses();
  expenseList.innerHTML = '';
  expenses.forEach((expense, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${expense.name} - $${expense.amount.toFixed(2)}
      <div>
        <button class="edit" onclick="editExpense(${index})">Edit</button>
        <button class="delete" onclick="deleteExpense(${index})">Delete</button>
      </div>
    `;
    expenseList.appendChild(li);
  });
};

// Add Expense
expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = expenseNameInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value.trim());
  if (name && amount > 0) {
    const expenses = getExpenses();
    expenses.push({ name, amount });
    saveExpenses(expenses);
    renderExpenses();
    expenseForm.reset();
  }
});

// Edit Expense
const editExpense = (index) => {
  const expenses = getExpenses();
  const expense = expenses[index];
  expenseNameInput.value = expense.name;
  expenseAmountInput.value = expense.amount;
  deleteExpense(index);
};

// Delete Expense
const deleteExpense = (index) => {
  const expenses = getExpenses();
  expenses.splice(index, 1);
  saveExpenses(expenses);
  renderExpenses();
};

// Calculate Total on Button Click
calculateTotalButton.addEventListener('click', calculateTotalExpense);

// Initial Render
renderExpenses();
