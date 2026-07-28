const API = "http://localhost:3000/expenses";
const form = document.getElementById("expenseForm");
const list = document.getElementById("expenseList");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const expense = {
        amount: document.getElementById("amount").value,
        description: document.getElementById("description").value,
        category: document.getElementById("category").value
    };

    await axios.post(API, expense);

    form.reset();

    loadExpenses();
});

async function loadExpenses() {
    list.innerHTML = "";

    const res = await axios.get(API);

    res.data.forEach(expense => {

        const li = document.createElement("li");

        li.innerHTML = `
            ₹${expense.amount} -
            ${expense.description} -
            ${expense.category}

            <button onclick="editExpense(${expense.id},
            '${expense.amount}',
            '${expense.description}',
            '${expense.category}')">
            Edit
            </button>

            <button onclick="deleteExpense(${expense.id})">
            Delete
            </button>
        `;

        list.appendChild(li);
    });
}

async function deleteExpense(id) {
    await axios.delete(`${API}/${id}`);
    loadExpenses();
}

async function editExpense(id, amount, description, category) {

    document.getElementById("amount").value = amount;
    document.getElementById("description").value = description;
    document.getElementById("category").value = category;

    await axios.put(`${API}/${id}`, {
        amount,
        description,
        category
    });

        await axios.delete(`${API}/${id}`);

    loadExpenses();
}

loadExpenses();