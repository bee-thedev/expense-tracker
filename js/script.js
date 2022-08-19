//------------------------------ Class UI ------------------------------------

class UI{
    constructor(){
        this.budgetFeedback = document.querySelector(".budget-feedback");
        this.expenseFeedback = document.querySelector(".expense-feedback");
        this.budgetForm = document.querySelector("#budget-form");
        this.budgetInput = document.querySelector("#budget-input");
        this.budgetAmount = document.querySelector("#budget-amount");
        this.expenseAmount = document.querySelector("#expense-amount");
        this.balance = document.querySelector("#balance");
        this.balanceAmount = document.querySelector("#balance-amount");
        this.expenseForm = document.querySelector("#expense-form");
        this.expenseInput = document.querySelector("#expense-input");
        this.amountInput = document.querySelector("#amount-input");
        this.expenseList = document.querySelector("#expense-list");
        this.itemList = [];
        this.itemID = 0;
    }
    submitBudgetForm(){
        const value= this.budgetInput.value;
        if(value === "" || value < 0){
            this.budgetFeedback.classList.add("showItem");
            this.budgetFeedback.innerHTML = `<p> Enter a positive value</p>`;
            //Assigning a constant t 'this' because it is coming from class UI, cannot be  used further down the function hell
            const self = this;
            console.log(self);
            setTimeout(function(){
                self.budgetFeedback.classlist.remove('showItem');
        }, 4000);
    }
    else{
        this.budgetAmount.textContent = value;
        this.budgetInput.value = "";
        this.showBalance();
    }
    }

    // Show Balance on the designated division

    showBalance(){
        let expense = this.totalExpense();
        let total = parseInt(this.budgetAmount.textContent) - expense;
        this.balanceAmount.textContent = total;

        if(total < 0){
            this.balance.classList.remove('showGreen', 'showBlack');
            this.balance.classList.add('showRed');
        }else if(total > 0){
            this.balance.classList.remove('showRed', 'showBlack');
            this.balance.classList.add('showGreen');
        }else if ( total === 0){
            this.balance.classList.remove('showGreen', 'showRed');
            this.balance.classList.add('showBlack');
        }
    }

        // Submit Expense Form
        submitExpenseForm(){
            const expenseValue = this.expenseInput.value;
            const amountValue = this.amountInput.value;

            if(expenseValue === "" || amountValue === "" || amountValue < 0){
                this.expenseFeedback.classList.add("showItem");
                this.expenseFeedback.classList.innerHTML = `<p> Values cannot be empty or negative</p>`
                const self = this;
                setTimeout(function(){
                     self.expenseFeedback.classList.remove("showItem")
                },4000)
            }else{
                let amount = parseInt(amountValue);
                this.expenseInput.value = "";
                this.amountInput.value = "";

                let expense = {
                    id: this.itemID,
                    title: expenseValue,
                    amount: amount,
                }
                this.itemID++;
                this.itemList.push(expense);
                this.addExpense(expense);
                //Show the balance
                this.showBalance();
            }
        }

        //Add Expense to the list 
        
        addExpense(expense){
            const div = document.createElement('div');
            div.classList.add('expense');
            div.innerHTML = `
            <div class="expense-item d-flex justify-content-between align-items-baseline">
                <h6 class="expense-title mb-0 text-uppercase list-item">${expense.title}</h6>
                <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>
                <div class="expense-icons list-item">
                        <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
                            <i class="fas fa-edit"></i>
                        </a>

                        <a href="#" class="delete-icon" data-id="${expense.id}">
                                <i class="fas fa-trash"></i>
                        </a>
                </div>
            </div>
            `;
            this.expenseList.appendChild(div);
        }


        // Total expense of all the expenses
     totalExpense(){
        let total = 0;
        if(this.itemList.length>0){
            console.log(this.itemList)
            total = this.itemList.reduce(function(accummulated, current){
                // console.log(`Total is ${accummulated} and current amount is  ${current.amount}`)
                accummulated += current.amount;
                return console.log(accummulated);
            }, 0);
        }
        this.expenseAmount.textContent = total;
        return console.log(total);
    }
}

    function eventListeners(){
        const budgetForm = document.querySelector(".budget-form");
        let expenseForm = document.querySelector("#expense-form");
        const expenseList = document.querySelector("#expense-list");

        // New UI instance 

        const ui = new UI();

        // Add Budget Listener for bdget submit

        budgetForm.addEventListener('submit',function(event){
            event.preventDefault();
            ui.submitBudgetForm();
        });

        // Add Expense Listener for exense submit

        expenseForm.addEventListener("submit", function(event){
            event.preventDefault();
            ui.submitExpenseForm();
        });

        //initiate expense list

        expenseList.addEventListener("click", function(){

        });
    }

    document.addEventListener("DOMContentLoaded", function(){
        eventListeners();
    })
