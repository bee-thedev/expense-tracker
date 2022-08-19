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
    }
}

    function eventListeners(){
        const budgetForm = document.querySelector(".budget-form");
        const expenseForm = document.querySelector("#expense-form");
        const expenseList = document.querySelector("#expense-list");

        // New UI instance 

        const ui = new UI();

        // Add Budget Listener for bdget submit

        budgetForm,addEventListener('submit',function(event){
            event.preventDefault();
            ui.submitBudgetForm();
        });

        // Add Expense Listener for exense submit

        expenseForm.addEventlistener("submit", function(event){
            event.preventDefault();
        });

        //initiate expense list

        expenseList.addEventlistener("click", function(){

        });
    }

    document.addEventListener("DOMContentLoaded", function(){
        eventListeners();
    })
