let budgetInput = document.getElementById("budget-input");
budgetInput.addEventListener("focus", function removeClass() {
    budgetFeedback.classList.remove('showItem')});

let budgetSubmit = document.getElementById("budget-submit");
budgetSubmit.addEventListener('click',calculateBtn);

let budgetAmount = document.getElementById("budget-amount");
let budgetFeedback = document.querySelector('.budget-feedback');
budgetFeedback.innerHTML = `<p>Value cannot be empty or negative​</p>`;

function calculateBtn() {
    event.preventDefault();
    if (budgetInput.value <0 || budgetInput.value ==='') {
        budgetFeedback.classList.add('showItem');
    } else {
        budgetAmount.innerText = budgetInput.value;
    }
    budgetInput.value = '';
    calculate()
};

//--------------------------------------//

let expenseAmount = document.getElementById('expense-amount');
let balanceAmount = document.getElementById('balance-amount');

function calculate(){
    let expense = sumExpense();
    let total = parseInt(budgetAmount.innerText) - expense;
    console.log(total);
    balanceAmount.innerText = total;
    if(total < 0){
      balance.classList.remove('showGreen', 'showBlack');
      balance.classList.add('showRed');
    } else if(total > 0){
        balance.classList.remove('showRed', 'showBlack');
        balance.classList.add('showGreen');
    } else if(total === 0){
      balance.classList.remove('showRed', 'showGreen');
      balance.classList.add('showBlack');
    }
  }

//----------------------------------//

let expenseInput = document.getElementById("expense-input");
let amountInput = document.getElementById("amount-input");
let expenseSubmit = document.getElementById("expense-submit");
let expenseFeedback = document.querySelector(".expense-feedback");
amountInput.addEventListener("focus",removeClass);
expenseInput.addEventListener("focus",removeClass);
expenseFeedback.innerHTML = `<p>Value cannot be empty or negative​</p>`;

function removeClass() {
    expenseFeedback.classList.remove('showItem')}
   
    let table = document.querySelector("table");   

    let edit_mode = false;
    let edit_row;
    let arr = [];

    function sumExpense() {
        let total = 0;
        if(arr.length > 0){
          total = arr.reduce(function(acc, curr){
            return acc + parseInt(curr.exvalue);
          }, 0)
        } 
        expenseAmount.innerText = total;
        return total;
      }
    
    expenseSubmit.addEventListener("click", addExpense);

    class Expense {
      constructor(_description, _value) {
        this.description = _description;
        this.exvalue = _value;
      }
    }

    function addExpense(event) {
        event.preventDefault()
        if (amountInput.value <0 || amountInput.value ==='' || expenseInput.value ==='') {
        expenseFeedback.classList.add('showItem');
        } else if (edit_mode === false) {
            table.classList.add('showItem');
        let expense1 = new Expense(expenseInput.value, amountInput.value);
        expenseInput.value = "";
        amountInput.value = "";
        arr.push(expense1);
        let tr = table.insertRow();
        console.log(arr);
        let td1 = tr.insertCell(0);
        let td2 = tr.insertCell(1);
        let td3 = tr.insertCell(2);
        
        td1.innerText = expense1.description;
        td2.innerText = parseInt(expense1.exvalue);
        let btn = document.createElement("button");
        td3.appendChild(btn);
        btn.innerHTML = `<a href="#" class="delete-icon">
         <i class="fas fa-trash"></i>
        </a>`;
        btn.addEventListener("click", deleteExpense);
        let editBtn = document.createElement("button");
        editBtn.innerHTML = `<a href="#" class="edit-icon mx-2">
        <i class="fas fa-edit"></i>
        </a>`;
        td3.appendChild(editBtn);
        editBtn.addEventListener("click", editExpense);
      } else {
        arr[edit_row - 1].description = expenseInput.value;
        arr[edit_row - 1].exvalue = parseFloat(amountInput.value);
        let allTr = table.querySelectorAll("tr");
        let tr = allTr[edit_row];
        let allTd = tr.querySelectorAll("td");
        allTd[0].innerText = expenseInput.value;
        allTd[1].innerText = amountInput.value;
        edit_mode = false;
        expenseInput.value = "";
        amountInput.value = "";
      }
      sumExpense()
      calculate()
    }

    function editExpense(e) {
        e.preventDefault();
      edit_mode = true;
      let tr = e.currentTarget.parentNode.parentNode;
      edit_row = tr.rowIndex;
      expenseInput.value = arr[tr.rowIndex - 1].description;
      amountInput.value = arr[tr.rowIndex - 1].exvalue;
    }

    function deleteExpense(e) {
      let tr = e.currentTarget.parentNode.parentNode;
      let index = tr.rowIndex;
      arr.splice(index - 1, 1);
      console.log(arr);
      tr.remove();
      calculate()   
    }

    